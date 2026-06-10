import { motion } from 'framer-motion'
import { sectionContainerVariants, fadeUpVariants } from '@/lib/variants'
import { Button } from '@/components/ui/Button'

export function CtaBand() {
  return (
    <section
      id="teklif"
      style={{
        backgroundColor: 'var(--color-band)',
        color: 'var(--color-band-ink)',
        paddingBlock: 'var(--spacing-cta, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, color: 'rgba(255,255,255,0.55)' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-orange)' }}>/ 04</span>
            <span style={{ fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12 }}>Teklif Al</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUpVariants}
            style={{
              fontFamily: 'var(--font-title)',
              fontWeight: 800,
              textTransform: 'uppercase',
              fontSize: 'var(--cta-size, 96px)',
              lineHeight: 0.95,
              marginTop: 24,
              letterSpacing: '-0.01em',
            }}
          >
            Bir Sonraki Kampanyanız<br />
            <span style={{ color: 'var(--color-orange)' }}>24 Saat</span> İçinde Sokakta.
          </motion.h2>

          {/* Lede */}
          <motion.p
            variants={fadeUpVariants}
            style={{
              margin: '28px auto 0',
              maxWidth: 640,
              color: 'rgba(255,255,255,0.70)',
              fontSize: 18,
              lineHeight: 1.55,
            }}
          >
            Brief'inizi paylaşın — rota önerisi, izlenim tahmini ve fiyat teklifi 24 saat
            içinde mailinizde.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeUpVariants}
            style={{ display: 'flex', gap: 14, marginTop: 44, justifyContent: 'center' }}
          >
            <Button
              href="mailto:teklif@media270.com?subject=Teklif%20Talebi"
              variant="primary"
              size="lg"
            >
              Teklif Al →
            </Button>
            <Button href="#iletisim" variant="ghost-dark" size="lg">
              İletişime Geç
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
