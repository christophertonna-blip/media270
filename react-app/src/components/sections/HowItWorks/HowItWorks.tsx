import { motion } from 'framer-motion'
import { sectionContainerVariants } from '@/lib/variants'
import { StepCard } from './StepCard'
import { RouteIcon } from './icons/RouteIcon'
import { BroadcastIcon } from './icons/BroadcastIcon'
import { MetricsIcon } from './icons/MetricsIcon'

const steps = [
  {
    number:    '/ 01',
    title:     'Rota',
    body:      'Hedef demografiye göre saat ve bölge bazlı rota tasarımı. Trafik yoğunluğu, etkinlik takvimi ve ilçe profiline göre optimize edilir.',
    footLeft:  '5–7 İŞ GÜNÜ',
    footRight: 'GPS DOĞRULAMALI',
    icon:      <RouteIcon />,
  },
  {
    number:    '/ 02',
    title:     'Yayın',
    body:      'PH-3 outdoor LED panellerde, 2480×560 piksel kreatif yayını. Statik, video veya dinamik içerik — gün ışığında okunabilir 6500 cd/m² parlaklık.',
    footLeft:  'PH-3 · 6500 CD/M²',
    footRight: '1 ARAÇ · 9.92 M',
    icon:      <BroadcastIcon />,
  },
  {
    number:    '/ 03',
    title:     'Ölçüm',
    body:      'Yayın bitiminde kampanyanızın özet raporu tarafınıza iletilir. Detaylı metrikler ileri aşamada müşteri panelinden takip edilebilecek.',
    footLeft:  'PDF + CSV',
    footRight: '48 SAAT İÇİNDE',
    icon:      <MetricsIcon />,
  },
]

export function HowItWorks() {
  return (
    <section
      id="nasil"
      style={{
        paddingBlock: 'var(--section-pad, 140px)',
        borderBottom: '1px solid var(--color-line)',
      }}
    >
      <div className="container">
        {/* Section Head */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            marginBottom: 80,
            alignItems: 'end',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--color-muted)', marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-orange)' }}>/ 01</span>
              <span style={{ fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12 }}>Nasıl Çalışır</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 800,
                textTransform: 'uppercase',
                fontSize: 'var(--section-size, 72px)',
                lineHeight: 0.92,
                letterSpacing: '-0.01em',
                maxWidth: 540,
              }}
            >
              Üç Adımda<br />Sokağa İner.
            </h2>
          </div>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: 'color-mix(in oklab, var(--color-ink) 70%, transparent)',
              maxWidth: 520,
            }}
          >
            Brief'ten yayın raporuna kadar tüm süreç tek bir operasyon ekibi tarafından
            yönetilir. Rota planlaması, kreatif teslim ve performans ölçümü standart.
          </p>
        </div>

        {/* Steps grid */}
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--color-line)',
            borderLeft: '1px solid var(--color-line)',
          }}
        >
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
