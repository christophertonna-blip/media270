import { motion } from 'framer-motion'
import { fadeUpDelayed } from '@/lib/variants'
import { HeroContent } from './HeroContent'
import { StatStack } from './StatStack'

export function Hero() {
  return (
    <section
      className="grid-bg"
      style={{
        position: 'relative',
        borderBottom: '1px solid var(--color-line)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 1fr',
            gap: 'var(--spacing-hero-gap, 80px)',
            paddingTop: 'var(--hero-pad-top, 120px)',
            paddingBottom: 'var(--hero-pad-bottom, 140px)',
            alignItems: 'start',
          }}
        >
          <HeroContent />

          <motion.div
            variants={fadeUpDelayed(0.20)}
            initial="hidden"
            animate="visible"
          >
            <StatStack />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
