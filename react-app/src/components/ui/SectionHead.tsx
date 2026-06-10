import type { ReactNode } from 'react'

interface SectionHeadProps {
  number:        string
  label:         string
  title:         ReactNode
  lede?:         string
  titleMaxWidth?: string
}

export function SectionHead({ number, label, title, lede, titleMaxWidth }: SectionHeadProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginBottom: 80 }}>
      {/* eyebrow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.18em',
          color: 'var(--color-muted)',
          textTransform: 'uppercase',
        }}>
          {number}
        </span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          border: '1px solid var(--color-line-strong)',
          padding: '6px 10px',
          borderRadius: 2,
          fontFamily: 'var(--font-label)',
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-ink)',
        }}>
          {label}
        </span>
      </div>

      {/* title */}
      <h2 style={{
        fontFamily: 'var(--font-title)',
        fontWeight: 800,
        fontSize: 'var(--section-size, 72px)',
        lineHeight: 0.92,
        letterSpacing: '-0.01em',
        textTransform: 'uppercase',
        color: 'var(--color-ink)',
        maxWidth: titleMaxWidth ?? 'none',
      }}>
        {title}
      </h2>

      {lede && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          lineHeight: 1.6,
          color: 'var(--color-muted)',
          maxWidth: 480,
        }}>
          {lede}
        </p>
      )}
    </div>
  )
}
