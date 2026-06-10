import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUpDelayed } from '@/lib/variants'
import { LiveDot } from '@/components/ui/LiveDot'
import { Button } from '@/components/ui/Button'
import TextCursorProximity from '@/components/ui/text-cursor-proximity'
import { useTheme } from '@/context/ThemeContext'

const meta = ['1 ARAÇ · İSTANBUL', 'PH-3 · 2480×560 PX', 'İST-001 · MTK 2024']

export function HeroContent() {
  const titleContainerRef = useRef<HTMLDivElement>(null)
  const { mood, accent } = useTheme()
  const inkColor = mood === 'night' ? '#FAFAFA' : '#0A0A0A'

  const titleStyles = {
    transform: { from: 'scale(1)', to: 'scale(1.12)' },
    color: { from: inkColor, to: accent },
  } as const

  const accentLineStyles = {
    transform: { from: 'scale(1)', to: 'scale(1.12)' },
    color: { from: accent, to: '#FF9A6C' },
  } as const

  return (
    <div>
      {/* Eyebrow */}
      <motion.div
        variants={fadeUpDelayed(0.05)}
        initial="hidden"
        animate="visible"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 12px',
          border: '1px solid var(--color-line-strong)',
          borderRadius: 2,
          backgroundColor: 'var(--color-bg)',
          marginBottom: 36,
        }}
      >
        <LiveDot size={6} />
        <span
          style={{
            fontFamily: 'var(--font-label)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontSize: 12,
          }}
        >
          İstanbul · Mobil LED Reklam
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        ref={titleContainerRef}
        variants={fadeUpDelayed(0.18)}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: 'var(--hero-size, 104px)',
          lineHeight: 0.92,
          letterSpacing: '-0.005em',
        }}
      >
        <span style={{ display: 'block' }}>
          <TextCursorProximity
            label="Markanız"
            styles={titleStyles}
            containerRef={titleContainerRef}
            radius={180}
            falloff="gaussian"
          />
        </span>
        <span style={{ display: 'block' }}>
          <TextCursorProximity
            label="Şehrin Ritmiyle"
            styles={titleStyles}
            containerRef={titleContainerRef}
            radius={180}
            falloff="gaussian"
          />
        </span>
        <span style={{ display: 'block', color: 'var(--color-orange)' }}>
          <TextCursorProximity
            label="Hareket Eder."
            styles={accentLineStyles}
            containerRef={titleContainerRef}
            radius={180}
            falloff="gaussian"
          />
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUpDelayed(0.32)}
        initial="hidden"
        animate="visible"
        style={{
          marginTop: 32,
          maxWidth: 560,
          fontSize: 18,
          lineHeight: 1.55,
          color: 'color-mix(in oklab, var(--color-ink) 72%, transparent)',
        }}
      >
        Boğaz'dan Maslak'a, Kadıköy'den Levent'e — 9.92 × 2.24 m PH-3 outdoor LED truck'ımız
        kampanyalarınızı şehrin tam göbeğinde, GPS-doğrulamalı rotalarla yayınlar.
        Ajans ve etkinlik ekipleri için, ölçülebilir dış mekan reklamcılığı.
      </motion.p>

      {/* Actions */}
      <motion.div
        variants={fadeUpDelayed(0.46)}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 44 }}
      >
        <Button href="mailto:teklif@media270.com" variant="primary" size="lg">
          Teklif Al →
        </Button>
        <Button href="#nasil" variant="ghost" size="lg">
          Süreci İncele
        </Button>
      </motion.div>

      {/* Meta */}
      <motion.div
        variants={fadeUpDelayed(0.46)}
        initial="hidden"
        animate="visible"
        style={{
          marginTop: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 28,
          color: 'var(--color-muted)',
        }}
      >
        {meta.map((m, i) => (
          <span key={m} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.02em' }}>
              {m}
            </span>
            {i < meta.length - 1 && (
              <span style={{ width: 1, height: 14, backgroundColor: 'var(--color-line-strong)' }} />
            )}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
