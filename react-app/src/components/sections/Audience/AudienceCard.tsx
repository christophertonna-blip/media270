import { motion } from 'framer-motion'
import { fadeUpVariants } from '@/lib/variants'
import { CornerBrackets } from '@/components/ui/CornerBrackets'
import type { ReactNode } from 'react'

interface UseCase {
  text: string
}

interface AudienceCardProps {
  index:       string
  title:       ReactNode
  description: string
  useCases:    UseCase[]
  viz:         ReactNode
  vizTag:      string
  code:        string
}

export function AudienceCard({ index, title, description, useCases, viz, vizTag, code }: AudienceCardProps) {
  return (
    <motion.article
      variants={fadeUpVariants}
      style={{
        background: `
          linear-gradient(rgba(10,10,10,0.045) 1px, transparent 1px) 0 0/24px 24px,
          linear-gradient(90deg, rgba(10,10,10,0.045) 1px, transparent 1px) 0 0/24px 24px,
          var(--color-bg)
        `,
        border: '1px solid var(--color-line-strong)',
        padding: '36px 32px 32px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'var(--size-card-min, 440px)',
        position: 'relative',
      }}
    >
      <CornerBrackets />

      {/* Tag */}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--color-orange)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            backgroundColor: 'var(--color-orange)',
            borderRadius: '50%',
            display: 'inline-block',
          }}
        />
        {index}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: 34,
          marginTop: 18,
          lineHeight: 1,
        }}
      >
        {title}
      </h3>

      {/* Viz */}
      <div
        style={{
          margin: '24px -8px',
          height: 140,
          border: '1px solid var(--color-line)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 10,
            left: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--color-muted)',
            letterSpacing: '0.04em',
            zIndex: 1,
          }}
        >
          {vizTag}
        </span>
        {viz}
      </div>

      {/* Description */}
      <p
        style={{
          marginTop: 0,
          color: 'color-mix(in oklab, var(--color-ink) 70%, transparent)',
          fontSize: 15,
          lineHeight: 1.55,
          minHeight: 190,
        }}
      >
        {description}
      </p>

      {/* Use cases */}
      <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--color-line)' }}>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-label)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            fontSize: 11,
            color: 'var(--color-muted)',
            marginBottom: 14,
          }}
        >
          Örnek Kullanım
        </span>
        {useCases.map((uc) => (
          <p
            key={uc.text}
            style={{
              fontSize: 15,
              lineHeight: 1.45,
              padding: '10px 0',
              borderBottom: '1px dashed var(--color-line)',
              color: 'color-mix(in oklab, var(--color-ink) 88%, transparent)',
            }}
          >
            {uc.text}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 'auto',
          paddingTop: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{code}</span>
        <a
          href="#iletisim"
          style={{
            fontFamily: 'var(--font-label)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            fontSize: 12,
            color: 'var(--color-orange)',
            textDecoration: 'none',
          }}
        >
          İletişime Geç →
        </a>
      </div>
    </motion.article>
  )
}
