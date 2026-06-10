import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export function StoryScroll() {
  return (
    <FlowArt aria-label="Media 270 Hikayesi">
      <FlowSection
        aria-label="Ne yapıyoruz"
        style={{ backgroundColor: '#FF5E1A', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Ne Yapıyoruz</p>
        <hr className="my-[2vw] border-t border-white/40" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Hareket
            <br />
            Eden
            <br />
            Reklam
          </h2>
        </div>
        <hr className="my-[2vw] border-t border-white/40" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          PH-3 LED panellerle donanmış araçlarımız, İstanbul sokaklarında markanızı en yüksek
          trafik noktalarına taşır. Statik billboardun ötesine geçin.
        </p>
      </FlowSection>

      <FlowSection
        aria-label="Rota planı"
        style={{ backgroundColor: '#0A0A0A', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Rota</p>
        <hr className="my-[2vw] border-t border-white/20" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Doğru
            <br />
            Yerde,
            <br />
            Doğru
            <br />
            Anda
          </h2>
        </div>
        <hr className="my-[2vw] border-t border-white/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Hedef demografinize göre saat ve bölge bazlı rota tasarımı. Trafik yoğunluğu,
          etkinlik takvimi ve ilçe profiline göre optimize edilir.
        </p>
        <hr className="my-[2vw] border-t border-white/20" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">GPS Doğrulama</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Her rota gerçek zamanlı GPS verisiyle doğrulanır. Nerede olduğumuzu her zaman bilirsiniz.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">5–7 İş Günü</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Kampanya planlamasından yayına kadar geçen süre. Hızlı, verimli, sonuç odaklı.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">İlçe Profili</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Beyoğlu, Kadıköy, Şişli — her ilçenin kitlesi farklı. Rotanızı buna göre şekillendiriyoruz.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection
        aria-label="Yayın kalitesi"
        style={{ backgroundColor: '#F5F3EF', color: '#0A0A0A' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Yayın</p>
        <hr className="my-[2vw] border-t border-black/20" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            2480
            <br />
            × 560
            <br />
            Piksel
          </h2>
        </div>
        <hr className="my-[2vw] border-t border-black/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Gün ışığında bile keskin görünen 6500 cd/m² parlaklık. Statik, video veya
          dinamik içerik — tek panelde her şey mümkün.
        </p>
        <hr className="my-[2vw] border-t border-black/20" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">PH-3 LED</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Profesyonel sınıf outdoor panel. Her hava koşulunda performans.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">9.92 m² Alan</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Tek araç başına yaklaşık 10 metrekare görünür yüzey. Büyük etki, mobil format.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Video Desteği</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Hareketli içerik, döngüsel yayın ve dakikalar içinde içerik güncellemesi.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection
        aria-label="Ölçüm ve raporlama"
        style={{ backgroundColor: '#1A3DE8', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Ölçüm</p>
        <hr className="my-[2vw] border-t border-white/30" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Veri
            <br />
            İle
            <br />
            İspat
          </h2>
        </div>
        <hr className="my-[2vw] border-t border-white/30" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Kampanya bitiminde özet raporunuz hazır. Güzergah, yayın süresi, erişim tahmini —
          hepsi PDF ve CSV formatında.
        </p>
        <hr className="my-[2vw] border-t border-white/30" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">48 Saat İçinde</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Yayın tamamlandıktan sonra raporunuz 48 saat içinde e-posta ile iletilir.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">PDF + CSV</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              İki formatta eksiksiz rapor. Kendi analizleriniz için ham veri her zaman hazır.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Müşteri Paneli</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              İleri aşamada canlı takip, anlık metrikler ve kampanya geçmişiniz tek ekranda.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection
        aria-label="Kampanya başlat"
        style={{ backgroundColor: '#0A0A0A', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Başlayın</p>
        <hr className="my-[2vw] border-t border-white/20" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Markanız
            <br />
            Yolda
            <br />
            Olsun
          </h2>
        </div>
        <hr className="my-[2vw] border-t border-white/20" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Kampanyanızı birlikte tasarlayalım. İstanbul'un en işlek noktalarında markanızı
          hareket ettirmeye hazır mısınız?
        </p>
      </FlowSection>
    </FlowArt>
  );
}
