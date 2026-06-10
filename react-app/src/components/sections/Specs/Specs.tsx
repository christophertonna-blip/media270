import { motion } from 'framer-motion'
import { sectionContainerVariants, fadeUpVariants } from '@/lib/variants'
import { TruckViz } from './TruckViz'
import { SpecStack } from './SpecStack'

export function Specs() {
  return (
    <section
      id="spec"
      style={{
        paddingBlock: 'var(--section-pad, 140px)',
        borderBottom: '1px solid var(--color-line)',
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
      }}
    >
      <div className="container">
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left: intro + truck viz */}
          <motion.div variants={fadeUpVariants}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--color-muted)', marginBottom: 32 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-orange)' }}>/ 03</span>
              <span style={{ fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12 }}>Donanım</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 800,
                textTransform: 'uppercase',
                fontSize: 'var(--hero-size, 104px)',
                lineHeight: 0.92,
                letterSpacing: '-0.005em',
              }}
            >
              9.92 Metre<br />
              <span style={{ color: 'var(--color-orange)' }}>LED</span> Sokakta.
            </h2>
            <p style={{ marginTop: 36, fontSize: 18, lineHeight: 1.6, color: 'color-mix(in oklab, var(--color-ink) 72%, transparent)', maxWidth: 520 }}>
              PH-3 outdoor LED panel, 3 yönde eş zamanlı yayın için tasarlandı. Gün ışığında
              okunabilen 6500 cd/m² parlaklık, kreatifinizi sokak ölçeğinde teslim eder.
            </p>
            <TruckViz />
          </motion.div>

          {/* Right: spec stack */}
          <motion.div variants={fadeUpVariants}>
            <SpecStack />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
