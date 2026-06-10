import { motion } from 'framer-motion'

interface LiveDotProps {
  size?: number
}

export function LiveDot({ size = 6 }: LiveDotProps) {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ opacity: [1, 0.35, 1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        width: size,
        height: size,
        backgroundColor: 'var(--color-orange)',
        borderRadius: '50%',
        display: 'inline-block',
        flexShrink: 0,
      }}
    />
  )
}
