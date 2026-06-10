import { motion } from 'framer-motion'
import { fadeUpVariants } from '@/lib/variants'
import type { ReactNode } from 'react'

interface StepCardProps {
  number:    string
  title:     string
  body:      string
  footLeft:  string
  footRight: string
  icon:      ReactNode
}

export function StepCard({ number, title, body, footLeft, footRight, icon }: StepCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      style={{
        padding: '48px 40px 56px',
        borderRight: '1px solid var(--color-line)',
        borderBottom: '1px solid var(--color-line)',
        position: 'relative',
        backgroundColor: 'var(--color-bg)',
        minHeight: 'var(--size-step-min, 380px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--color-orange)',
        }}
      >
        {number}
      </span>

      <h3
        style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: 36,
          letterSpacing: '0.005em',
          marginTop: 18,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          marginTop: 18,
          color: 'color-mix(in oklab, var(--color-ink) 70%, transparent)',
          lineHeight: 1.55,
          fontSize: 15,
        }}
      >
        {body}
      </p>

      {icon}

      <div
        style={{
          marginTop: 'auto',
          paddingTop: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'var(--color-muted)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{footLeft}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{footRight}</span>
      </div>
    </motion.div>
  )
}
