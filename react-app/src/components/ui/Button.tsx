import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'ghost-dark'
type Size    = 'default' | 'lg'

interface ButtonProps {
  variant?:  Variant
  size?:     Size
  href?:     string
  children:  ReactNode
  onClick?:  () => void
  className?: string
}

const base: Record<string, React.CSSProperties> = {
  primary: {
    background: 'var(--color-orange)',
    color: '#fff',
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-ink)',
    border: '1.5px solid var(--color-ink)',
  },
  'ghost-dark': {
    background: 'transparent',
    color: 'var(--color-band-ink)',
    border: '1.5px solid rgba(255,255,255,0.3)',
  },
}

const hover: Record<string, Record<string, string>> = {
  primary:    { backgroundColor: '#ff4d00' },
  ghost:      { backgroundColor: 'var(--color-ink)', color: '#fff' },
  'ghost-dark': { borderColor: 'rgba(255,255,255,0.7)' },
}

export function Button({ variant = 'primary', size = 'default', href, children, onClick, className }: ButtonProps) {
  const isLg = size === 'lg'

  const sharedStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-label)',
    fontWeight: 600,
    fontSize: isLg ? 15 : 13,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: isLg ? '14px 28px' : '10px 20px',
    borderRadius: 2,
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...base[variant],
  }

  const hoverProps = { y: -1, ...hover[variant] }

  if (href) {
    return (
      <motion.a
        href={href}
        style={sharedStyle}
        className={className}
        whileHover={hoverProps}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      style={sharedStyle}
      className={className}
      whileHover={hoverProps}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  )
}
