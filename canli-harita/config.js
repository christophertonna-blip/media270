// Canlı harita — Supabase Edge Functions bağlantı ayarları.
// supabaseUrl: Supabase proje URL'niz (Dashboard → Settings → API)
// supabaseAnonKey: anon public key (aynı sayfadan)
window.LIVE_MAP_CONFIG = {
  supabaseUrl: 'https://YOUR_PROJECT_REF.supabase.co',
  supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY',
  pollIntervalMs: 5000,
  mapboxToken: 'pk.eyJ1IjoiY2hyaXN0b3BoZXJ0b25uYTg0IiwiYSI6ImNtcTlheHV4MDAxM2Uyc3F0dmNrNDlndDYifQ.nNbHg-qTxDoJKVv5WCvUKA',
  mapStyle: 'mapbox://styles/mapbox/light-v11',
  followZoom: 14,
  followLerp: 0.08,
}
