(function () {
  const CFG = window.LIVE_MAP_CONFIG || {};
  const C = (id) => document.getElementById(id);

  function showErr(msg) {
    const b = C('errbar');
    b.textContent = msg;
    b.style.display = 'block';
  }

  if (!CFG.supabaseUrl || CFG.supabaseUrl.includes('YOUR_PROJECT')) {
    showErr('config.js dosyasında supabaseUrl ve supabaseAnonKey ayarlanmalı.');
    return;
  }
  if (!CFG.mapboxToken || !String(CFG.mapboxToken).startsWith('pk.')) {
    showErr('config.js içinde geçerli bir Mapbox token gerekli.');
    return;
  }

  const fnBase = CFG.supabaseUrl.replace(/\/$/, '') + '/functions/v1';
  const pollMs = CFG.pollIntervalMs || 5000;
  const headers = () => ({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + CFG.supabaseAnonKey,
    'apikey': CFG.supabaseAnonKey,
  });

  let sessionToken = null;
  let pollTimer = null;
  let clockTimer = null;
  let map = null;
  let marker = null;
  let lastFix = null;
  let hasFramed = false;
  let userHasMoved = false;
  let mode = 'live';
  let heatRequest = 0;
  let heatAbort = null;
  let expiryTimer = null;
  let heatData = null;
  let heatBounds = null;

  function normalizeCode(raw) {
    return raw.trim().toUpperCase().replace(/\s+/g, '');
  }

  function formatTrTime(date) {
    try {
      return date.toLocaleString('tr-TR', {
        timeZone: 'Europe/Istanbul',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
      });
    } catch { return '—'; }
  }

  function metersBetween(a, b) {
    if (!a) return Infinity;
    const toRad = (d) => d * Math.PI / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLon = toRad(b.lon - a.lon);
    const x = Math.sin(dLat / 2) ** 2
      + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
    return 2 * 6371000 * Math.asin(Math.sqrt(x));
  }

  function showMapUi() {
    C('gate').style.display = 'none';
    ['map', 'grid-overlay', 'header', 'status-bar', 'wordmark', 'map-tools'].forEach((id) => {
      C(id).style.display = id === 'map' ? 'block' : (id === 'grid-overlay' ? 'block' : 'block');
    });
  }

  function initMap() {
    mapboxgl.accessToken = CFG.mapboxToken;
    map = new mapboxgl.Map({
      container: 'map',
      style: CFG.mapStyle || 'mapbox://styles/mapbox/light-v11',
      center: [29.03, 41.05],
      zoom: 11,
      pitch: 0,
      bearing: 0,
      dragRotate: false,
      pitchWithRotate: false,
      attributionControl: true,
    });

    const el = document.createElement('div');
    el.className = 'truck-mark';
    const img = document.createElement('img');
    img.src = '/m270_icon_color.svg';
    img.alt = 'Media270';
    el.appendChild(img);
    marker = new mapboxgl.Marker({ element: el, anchor: 'center' })
      .setLngLat([29.03, 41.05])
;

    map.on('dragstart', () => { userHasMoved = true; });
    map.on('zoomstart', (e) => {
      if (e.originalEvent) userHasMoved = true;
    });

    map.on('load', () => {
      ensureHeatLayer();
      renderHeat();
      map.getStyle().layers.forEach((ly) => {
        if (ly.type !== 'symbol') return;
        const keep = /settlement|place-|state-label/.test(ly.id);
        map.setLayoutProperty(ly.id, 'visibility', keep ? 'visible' : 'none');
        if (!keep) return;
        try {
          map.setPaintProperty(ly.id, 'text-color', '#0A0A0A');
          map.setPaintProperty(ly.id, 'text-halo-color', '#F2F0EC');
          map.setPaintProperty(ly.id, 'text-halo-width', 1.6);
          map.setPaintProperty(ly.id, 'text-opacity', 0.92);
        } catch (err) { /* bazı katmanlarda paint yok */ }
      });
    });
  }

  function frameVehicle(lon, lat, animate) {
    const view = { center: [lon, lat], zoom: CFG.followZoom || 13, bearing: 0, pitch: 0 };
    if (!map.loaded()) {
      map.once('load', () => map.jumpTo(view));
      return;
    }
    if (animate) map.easeTo({ ...view, duration: 800, essential: true });
    else map.jumpTo(view);
  }

  function updateMarker(lon, lat) {
    if (!marker || !map) return;
    marker.setLngLat([lon, lat]).addTo(map);
    const next = { lon, lat };
    const dist = metersBetween(lastFix, next);
    lastFix = next;

    if (!hasFramed) {
      hasFramed = true;
      frameVehicle(lon, lat, true);
      return;
    }
    if (!userHasMoved && dist > 25) {
      frameVehicle(lon, lat, true);
    }
  }

  function statusLine(id,label,value) {
    C(id).replaceChildren(document.createTextNode(label+' '));
    const bold=document.createElement('b');bold.textContent=value;C(id).appendChild(bold);
  }
  function paintStatus() { statusLine('status-clock','Şimdi:',formatTrTime(new Date())); }
  function updateStatus(data) {
    paintStatus();
    statusLine('status-fix','Son konum:',formatTrTime(new Date(data.ts)));
    statusLine('status-speed','Hız:',data.speed != null ? data.speed+' km/sa' : '—');
    statusLine('status-address','Konum:',data.address || (data.lat.toFixed(5)+', '+data.lon.toFixed(5)));
  }
  function ensureHeatLayer() {
    if(!map || !map.isStyleLoaded())return;
    if(!map.getSource('daily-heat'))map.addSource('daily-heat',{type:'geojson',data:{type:'FeatureCollection',features:[]}});
    if(!map.getLayer('daily-heat'))map.addLayer({id:'daily-heat',type:'heatmap',source:'daily-heat',paint:{
      'heatmap-weight':['interpolate',['linear'],['get','seconds'],0,0,60,1,300,5,1800,12],
      'heatmap-intensity':['interpolate',['linear'],['zoom'],7,.6,14,1.5,19,2],
      'heatmap-radius':['interpolate',['linear'],['zoom'],7,8,12,22,16,35],
      'heatmap-opacity':.8,
      'heatmap-color':['interpolate',['linear'],['heatmap-density'],0,'rgba(50,183,207,0)',.15,'#32b7cf',.35,'#77cf80',.55,'#ffcb47',.8,'#f36629',1,'#b51f28']
    }});
  }
  function renderHeat() {
    if(!map)return;
    if(!map.getSource('daily-heat')){if(!map.isStyleLoaded())return;ensureHeatLayer();}
    map.getSource('daily-heat').setData(mode==='heat' && heatData ? heatData.geojson : {type:'FeatureCollection',features:[]});
    if(mode!=='heat'||!heatData?.geojson.features.length)return;
    const bounds=new mapboxgl.LngLatBounds();
    heatData.geojson.features.forEach(f=>bounds.extend(f.geometry.coordinates));
    map.fitBounds(bounds,{padding:{top:150,bottom:Math.min(window.innerHeight*.45,360),left:45,right:45},maxZoom:15,duration:0});
  }
  async function heatApi(date,signal) {
    const token=sessionToken;
    const res=await fetch(fnBase+'/live-map-heatmap'+(date?'?date='+encodeURIComponent(date):''),{
      headers:{...headers(),'x-live-map-session':token},signal,cache:'no-store'
    });
    const data=await res.json();
    if(token!==sessionToken)throw new Error('session_end');
    if(res.status===401||res.status===403){stopSession(data.error||'Oturum sona erdi');throw new Error('session_end');}
    if(!res.ok)throw new Error(data.error||'Isı haritası alınamadı');
    return data;
  }
  async function loadHeat() {
    const id=++heatRequest;
    heatAbort?.abort();heatAbort=new AbortController();
    heatData=null;renderHeat();
    C('heat-refresh').disabled=true;C('heat-date').disabled=true;
    C('heat-message').textContent='Günün konumları hazırlanıyor…';
    try {
      const bounds=await heatApi(null,heatAbort.signal);
      if(id!==heatRequest||mode!=='heat')return;
      heatBounds=bounds;
      const input=C('heat-date');input.min=bounds.minDate;input.max=bounds.maxDate;
      if(!input.value||input.value<bounds.minDate||input.value>bounds.maxDate)input.value=bounds.maxDate;
      const data=await heatApi(input.value,heatAbort.signal);
      if(id!==heatRequest||mode!=='heat')return;
      heatData=data;renderHeat();
      C('heat-message').textContent=data.pointCount
        ? data.pointCount.toLocaleString('tr-TR')+' konum · '+formatTrTime(new Date(data.window.since))+'–'+formatTrTime(new Date(data.window.until))+(data.date===data.today?' · Gün devam ediyor.':'')
        : 'Bu günün izin verilen saatlerinde gösterilecek konum kaydı yok.';
    }catch(e){if(id===heatRequest&&e.name!=='AbortError'&&e.message!=='session_end')C('heat-message').textContent=e.message;}
    finally{if(id===heatRequest){C('heat-refresh').disabled=false;C('heat-date').disabled=!heatBounds;}}
  }
  function setMode(next) {
    mode=next;heatRequest++;heatAbort?.abort();heatData=null;renderHeat();
    C('mode-live').setAttribute('aria-pressed',String(mode==='live'));
    C('mode-heat').setAttribute('aria-pressed',String(mode==='heat'));
    C('heat-controls').hidden=mode!=='heat';
    C('status-bar').style.display=mode==='live'?'block':'none';
    C('header').querySelector('h1').textContent=mode==='live'?'Araç Konumu':'Günlük Isı Haritası';
    C('header').querySelector('.eyebrow').textContent=mode==='live'?'Media270 · Canlı':'Media270 · Günlük';
    marker?.remove();
    if(mode==='heat')loadHeat();else{hasFramed=false;userHasMoved=false;pollOnce();}
  }
  C('mode-live').addEventListener('click',()=>setMode('live'));
  C('mode-heat').addEventListener('click',()=>setMode('heat'));
  C('heat-date').addEventListener('change',loadHeat);
  C('heat-refresh').addEventListener('click',loadHeat);
  function stopSession(message) {
    heatRequest++;heatAbort?.abort();heatData=null;heatBounds=null;renderHeat();marker?.remove();
    clearTimeout(expiryTimer);C('heat-date').value='';
    if (pollTimer) clearInterval(pollTimer);
    if (clockTimer) clearInterval(clockTimer);
    pollTimer = null;
    clockTimer = null;
    sessionToken = null;
    lastFix = null;
    hasFramed = false;
    userHasMoved = false;
    C('gate-error').textContent = message || '';
    C('gate').style.display = 'flex';
    ['map', 'grid-overlay', 'header', 'status-bar', 'wordmark', 'map-tools'].forEach((id) => {
      C(id).style.display = 'none';
    });
    if (message) C('gate-error').textContent = message;
  }

  async function validateCode(code) {
    const res = await fetch(fnBase + '/live-map-validate', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Kod doğrulanamadı');
    return data;
  }

  async function fetchPosition() {
    const token=sessionToken;
    const res = await fetch(fnBase + '/live-map-position', {
      method: 'GET',
      headers: { ...headers(), 'x-live-map-session': token },
    });
    const data = await res.json();
    if(token!==sessionToken)throw new Error('session_end');
    if (res.status === 403 || res.status === 401) {
      stopSession(data.error || 'Oturum sona erdi');
      throw new Error('session_end');
    }
    if (!res.ok) throw new Error(data.error || 'Konum alınamadı');
    return data;
  }

  async function pollOnce() {
    if(!sessionToken||mode!=='live')return;
    const token=sessionToken;
    try {
      const pos = await fetchPosition();
      if(token!==sessionToken||mode!=='live')return;
      updateMarker(pos.lon, pos.lat);
      updateStatus(pos);
    } catch (e) {
      if (e.message === 'session_end') return;
      console.warn('[poll]', e);
    }
  }

  function startPolling() {
    if (pollTimer) clearInterval(pollTimer);
    if (clockTimer) clearInterval(clockTimer);
    pollOnce();
    let ticks=0;
    pollTimer = setInterval(()=>{if(mode==='live')pollOnce();else if(++ticks%6===0)heatApi(null).then(b=>{if(heatBounds&&(b.minDate!==heatBounds.minDate||b.maxDate!==heatBounds.maxDate))loadHeat();}).catch(e=>{if(e.message!=='session_end'){heatData=null;renderHeat();C('heat-message').textContent='Bağlantı kontrol edilemedi. Yenile ile yeniden deneyin.';}});}, pollMs);
    paintStatus();
    clockTimer = setInterval(paintStatus, 1000);
  }

  C('gate-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const code = normalizeCode(C('code-input').value);
    C('gate-error').textContent = '';
    C('gate-submit').disabled = true;
    try {
      const { sessionToken: token, expiresAt } = await validateCode(code);
      sessionToken = token;
      showMapUi();
      if (!map) initMap();
      else map.resize();
      setMode('live');
      clearTimeout(expiryTimer);expiryTimer=setTimeout(()=>stopSession('Oturum süresi doldu. Yeniden giriş yapın.'),Math.max(0,Date.parse(expiresAt)-Date.now()));
      startPolling();
    } catch (err) {
      C('gate-error').textContent = err.message || 'Giriş başarısız';
    } finally {
      C('gate-submit').disabled = false;
    }
  });

  const params = new URLSearchParams(location.search);
  const prefill = params.get('code');
  if (prefill) {
    C('code-input').value = prefill;
  }
})();
