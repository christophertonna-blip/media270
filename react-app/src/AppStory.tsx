import logoUrl from '@/assets/svgs/m270_lockup_color.svg'
import { ThemeProvider } from '@/context/ThemeContext'
import { TweaksPanel } from '@/components/tweaks/TweaksPanel'
import FlowArt, { FlowSection } from '@/components/ui/story-scroll'
import { FloatingMenu } from '@/components/ui/FloatingMenu'

/* ── Yardımcı: Küçük başlık etiketi ──────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--font-label)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.20em',
      textTransform: 'uppercase',
    }}>
      {children}
    </p>
  )
}

/* ── Yardımcı: Bölücü çizgi ──────────────────────────────── */
function Divider({ color = 'rgba(255,255,255,0.25)' }: { color?: string }) {
  return (
    <hr style={{
      border: 'none',
      borderTop: `1px solid ${color}`,
      margin: 0,
    }} />
  )
}

/* ── Yardımcı: Büyük başlık ──────────────────────────────── */
function BigTitle({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-title)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 'clamp(3rem, 10vw, 11rem)',
        /* Türkçe harfler (İ Ş Ğ Ü Ö) için daha geniş satır aralığı */
        lineHeight: 0.92,
        letterSpacing: '-0.01em',
        ...style,
      }}
    >
      {children}
    </h2>
  )
}

/* ── Yardımcı: Açıklama metni ────────────────────────────── */
function Body({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'right' }) {
  return (
    <p style={{
      maxWidth: '52ch',
      fontSize: 'clamp(1rem, 2vw, 1.5rem)',
      lineHeight: 1.5,
      fontWeight: 400,
      marginLeft: align === 'right' ? 'auto' : undefined,
      textAlign: align,
    }}>
      {children}
    </p>
  )
}

/* ── Yardımcı: 3 kolonlu bilgi grid ──────────────────────── */
function InfoGrid({ items, dividerColor }: {
  items: { title: string; body: string }[];
  dividerColor?: string;
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3vw' }}>
      {items.map((item) => (
        <div key={item.title} style={{ minWidth: 180, flex: 1 }}>
          <p style={{
            fontFamily: 'var(--font-label)',
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 8,
            ...(dividerColor ? {} : {}),
          }}>
            {item.title}
          </p>
          <p style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', lineHeight: 1.55, opacity: 0.70 }}>
            {item.body}
          </p>
        </div>
      ))}
    </div>
  )
}

/* ════════════════════════════════════════════════════════════
   SAYFA
═══════════════════════════════════════════════════════════════ */
const menuOptions = [
  { label: 'Nasıl Çalışır', href: '#nasil' },
  { label: 'Kime Hizmet',   href: '#kime' },
  { label: 'Donanım',       href: '#donanim' },
  { label: 'İletişim',      href: 'mailto:iletisim@media270.com' },
  { label: 'Teklif Al →',   href: 'mailto:teklif@media270.com' },
]

function StoryPage() {
  return (
    <>
      <FloatingMenu options={menuOptions} />

      <FlowArt aria-label="Media 270 — Mobil LED Reklam">

        {/* ── 00 GİRİŞ ─────────────────────────────────────── */}
        <FlowSection
          aria-label="Giriş"
          style={{
            backgroundColor: '#fff',
            color: '#0A0A0A',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 32,
          }}
        >
          {/* Büyük logo */}
          <img
            src={logoUrl}
            alt="Media270"
            style={{
              width: 'clamp(320px, 48vw, 780px)',
              height: 'auto',
              display: 'block',
            }}
          />

          {/* Turuncu ayırıcı */}
          <div style={{ width: 48, height: 2, backgroundColor: '#FF5E1A', margin: '0 auto' }} />

          {/* Stat stili etiket — "3 EKRAN · Yayın Yüzeyi" karakteriyle */}
          <div>
            <p style={{
              fontFamily: 'var(--font-title)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 4rem)',
              lineHeight: 1,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}>
              İSTANBUL
              <span style={{ fontSize: '0.5em', marginLeft: 10, color: '#FF5E1A' }}>·</span>
            </p>
            <p style={{
              fontFamily: 'var(--font-label)',
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.45)',
              marginTop: 8,
            }}>
              Mobil LED Reklam
            </p>
          </div>

          {/* Kaydır göstergesi */}
          <div style={{
            position: 'absolute',
            bottom: '4vw',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            color: 'rgba(10,10,10,0.35)',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}>
              Kaydır
            </p>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ animation: 'bounce 1.8s ease-in-out infinite' }}>
              <path d="M8 4v16M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </FlowSection>

        {/* ── 01 HERO ──────────────────────────────────────── */}
        <FlowSection
          aria-label="Hero"
          style={{ backgroundColor: '#FF5E1A', color: '#fff', paddingTop: 60 }}
        >
          <Label>01 — İstanbul · Mobil LED Reklam</Label>

          <Divider color="rgba(255,255,255,0.30)" />

          <BigTitle>
            Markanız<br />
            Şehrin<br />
            Ritmiyle<br />
            Hareket<br />
            Eder.
          </BigTitle>

          <Divider color="rgba(255,255,255,0.30)" />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3vw' }}>
            <div style={{ minWidth: 140, flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: 'clamp(2.5rem,5vw,5rem)', lineHeight: 1 }}>
                18<span style={{ fontSize: '0.5em', marginLeft: 4 }}>M</span>
              </p>
              <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.70, marginTop: 6 }}>
                Aylık İzlenim
              </p>
            </div>
            <div style={{ minWidth: 140, flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: 'clamp(2.5rem,5vw,5rem)', lineHeight: 1 }}>
                3<span style={{ fontSize: '0.45em', marginLeft: 4 }}>EKRAN</span>
              </p>
              <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.70, marginTop: 6 }}>
                Yayın Yüzeyi
              </p>
            </div>
            <div style={{ minWidth: 140, flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-title)', fontWeight: 800, fontSize: 'clamp(2.5rem,5vw,5rem)', lineHeight: 1 }}>
                24<span style={{ fontSize: '0.5em', marginLeft: 4 }}>H</span>
              </p>
              <p style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.70, marginTop: 6 }}>
                Kampanya Lansmanı
              </p>
            </div>
          </div>

          <Divider color="rgba(255,255,255,0.30)" />

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <Body>
              Boğaz'dan Maslak'a, Kadıköy'den Levent'e — 9.92 × 2.24 m PH-3 outdoor LED
              truck'ımız kampanyalarınızı şehrin tam göbeğinde, GPS-doğrulamalı rotalarla
              yayınlar.
            </Body>
            <a
              href="mailto:teklif@media270.com"
              style={{
                display: 'inline-block',
                padding: '16px 36px',
                backgroundColor: '#fff',
                color: '#FF5E1A',
                fontFamily: 'var(--font-label)',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Teklif Al →
            </a>
          </div>
        </FlowSection>

        {/* ── 02 NASIL ÇALIŞIR ─────────────────────────────── */}
        <FlowSection
          aria-label="Nasıl Çalışır"
          style={{ backgroundColor: '#0A0A0A', color: '#fff' }}
        >
          <Label>02 — Nasıl Çalışır</Label>

          <Divider color="rgba(255,255,255,0.15)" />

          <BigTitle>
            Üç<br />
            Adımda<br />
            Sokağa<br />
            İner.
          </BigTitle>

          <Divider color="rgba(255,255,255,0.15)" />

          <Body>
            Brief'ten yayın raporuna kadar tüm süreç tek bir operasyon ekibi tarafından
            yönetilir. Rota planlaması, kreatif teslim ve performans ölçümü standart.
          </Body>

          <Divider color="rgba(255,255,255,0.15)" />

          <InfoGrid items={[
            {
              title: '/ 01 — Rota',
              body: 'Hedef demografiye göre saat ve bölge bazlı rota tasarımı. Trafik yoğunluğu ve etkinlik takvimine göre optimize edilir. 5–7 iş günü · GPS doğrulamalı.',
            },
            {
              title: '/ 02 — Yayın',
              body: 'PH-3 outdoor LED panellerde 2480×560 piksel kreatif yayını. Statik, video veya dinamik içerik. Gün ışığında okunabilir 6500 cd/m² parlaklık.',
            },
            {
              title: '/ 03 — Ölçüm',
              body: 'Yayın bitiminde kampanyanızın özet raporu tarafınıza iletilir. Detaylı metrikler müşteri panelinden 48 saat içinde PDF + CSV formatında.',
            },
          ]} />
        </FlowSection>

        {/* ── 03 KİME HİZMET ──────────────────────────────── */}
        <FlowSection
          aria-label="Kime Hizmet"
          style={{ backgroundColor: '#F5F3EF', color: '#0A0A0A' }}
        >
          <Label>03 — Kime Hizmet</Label>

          <Divider color="rgba(10,10,10,0.15)" />

          <BigTitle>
            Üç<br />
            Ekip<br />
            İçin<br />
            Altyapı.
          </BigTitle>

          <Divider color="rgba(10,10,10,0.15)" />

          <Body>
            Ajans ve etkinlik şirketleriyle uzun süreli çerçeve anlaşmaları yapıyoruz.
            KOBİ'ler için ise paketli, sabit fiyatlı yayın blokları sunuyoruz.
          </Body>

          <Divider color="rgba(10,10,10,0.15)" />

          <InfoGrid items={[
            {
              title: '01 / Etkinlik',
              body: 'Konser, lansman ve festival çevresinde rota yayını. Kreatifiniz hazırsa yayınlarız; yoksa içerik üretimiyle yayına hazır hale getiririz.',
            },
            {
              title: '02 / Ajans',
              body: 'Çerçeve anlaşma ile müşteri kampanyalarınızı birlikte yürütüyoruz. Her kampanya sonunda rota logu, izlenim tahmini ve foto kanıtla raporlama.',
            },
            {
              title: '03 / KOBİ',
              body: 'Paylaşımlı kullanım modeli ile her ölçekten KOBİ\'ye ve markaya hizmet veriyoruz — tek bir LED truck\'ın esnek gücüyle.',
            },
          ]} />
        </FlowSection>

        {/* ── 04 DONANIM ──────────────────────────────────── */}
        <FlowSection
          aria-label="Donanım"
          style={{ backgroundColor: '#FF5E1A', color: '#0A0A0A' }}
        >
          <Label>04 — Donanım</Label>

          <Divider color="rgba(10,10,10,0.20)" />

          <BigTitle>
            9.92 M<br />
            PH-3<br />
            LED<br />
            Sokakta.
          </BigTitle>

          <Divider color="rgba(10,10,10,0.20)" />

          <Body>
            PH-3 outdoor LED panel, 3 yönde eş zamanlı yayın için tasarlandı. Gün
            ışığında okunabilen 6500 cd/m² parlaklık, kreatifinizi sokak ölçeğinde teslim eder.
          </Body>

          <Divider color="rgba(10,10,10,0.20)" />

          <InfoGrid items={[
            {
              title: 'Çözünürlük',
              body: '2480 × 560 piksel. Her hava koşulunda, her mesafeden okunan netlik.',
            },
            {
              title: 'Parlaklık',
              body: '6500 cd/m² — gün ışığında bile parlak ve okunabilir.',
            },
            {
              title: 'Format',
              body: 'Statik görsel, döngüsel video veya dinamik içerik. Dakikalar içinde güncelleme.',
            },
            {
              title: 'Yüzey',
              body: '9.92 m² görünür alan. Tek araç, üç yönde eş zamanlı yayın.',
            },
            {
              title: 'Rota',
              body: 'GPS doğrulamalı güzergah. Her yayın loglanır, raporlanır.',
            },
            {
              title: 'Lansman',
              body: 'Kreatif teslimden ilk yayına: 24 saat.',
            },
          ]} />
        </FlowSection>

        {/* ── 05 TEKLİF AL ────────────────────────────────── */}
        <FlowSection
          aria-label="Teklif Al"
          style={{ backgroundColor: '#0A0A0A', color: '#fff' }}
        >
          <Label>05 — Teklif Al</Label>

          <Divider color="rgba(255,255,255,0.15)" />

          <BigTitle>
            24 Saat<br />
            İçinde<br />
            Sokakta.
          </BigTitle>

          <Divider color="rgba(255,255,255,0.15)" />

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
            <Body>
              Brief'inizi paylaşın — rota önerisi, izlenim tahmini ve fiyat teklifi 24 saat
              içinde mailinizde. Ajans ve etkinlik ekipleri için çerçeve anlaşma seçeneği mevcut.
            </Body>
            <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
              <a
                href="mailto:teklif@media270.com?subject=Teklif%20Talebi"
                style={{
                  display: 'inline-block',
                  padding: '16px 36px',
                  backgroundColor: '#FF5E1A',
                  color: '#fff',
                  fontFamily: 'var(--font-label)',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Teklif Al →
              </a>
              <a
                href="mailto:iletisim@media270.com"
                style={{
                  display: 'inline-block',
                  padding: '16px 36px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#fff',
                  fontFamily: 'var(--font-label)',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                İletişim
              </a>
            </div>
          </div>

          <Divider color="rgba(255,255,255,0.15)" />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <img
              src={logoUrl}
              alt="Media270"
              style={{ height: 20, filter: 'brightness(0) invert(1)', opacity: 0.5 }}
            />
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.10em',
              opacity: 0.45,
            }}>
              1 ARAÇ · PH-3 · 2480×560 PX · GPS DOĞRULAMALI · İST-001
            </p>
          </div>
        </FlowSection>

      </FlowArt>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer style={{
        backgroundColor: '#0A0A0A',
        color: '#fff',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '40px 4vw',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: 24,
      }}>
        <img src={logoUrl} alt="Media270" style={{ height: 20, filter: 'brightness(0) invert(1)' }} />
        <ul style={{ display: 'flex', gap: 24, listStyle: 'none', margin: 0 }}>
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/media_270/' },
            { label: 'LinkedIn', href: 'https://linkedin.com/company/media270' },
          ].map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-label)',
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.10em',
          color: 'rgba(255,255,255,0.35)',
          textAlign: 'right',
        }}>
          © {new Date().getFullYear()} Media270. Tüm hakları saklıdır.
        </p>
      </footer>

      {import.meta.env.DEV && <TweaksPanel />}
    </>
  )
}

export default function AppStory() {
  return (
    <ThemeProvider>
      <StoryPage />
    </ThemeProvider>
  )
}
