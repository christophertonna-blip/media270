import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { pinVariants } from '@/lib/variants'

export function RouteIcon() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  const routePath = 'M10,96 L60,96 L60,60 L220,60 L220,24 L300,24 L300,60 L390,60'
  const dash = 600

  return (
    <div
      ref={ref}
      style={{
        marginTop: 32,
        height: 120,
        border: '1px solid var(--color-line)',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'linear-gradient(rgba(10,10,10,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.045) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <svg viewBox="0 0 400 120" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* Street grid */}
        <g stroke="currentColor" strokeWidth={0.6} opacity={0.45}>
          <line x1={0} y1={24} x2={400} y2={24} />
          <line x1={0} y1={60} x2={400} y2={60} />
          <line x1={0} y1={96} x2={400} y2={96} />
          <line x1={60}  y1={0} x2={60}  y2={120} />
          <line x1={140} y1={0} x2={140} y2={120} />
          <line x1={220} y1={0} x2={220} y2={120} />
          <line x1={300} y1={0} x2={300} y2={120} />
          <line x1={360} y1={0} x2={360} y2={120} />
        </g>
        {/* Main artery */}
        <line x1={0} y1={60} x2={400} y2={60} stroke="currentColor" strokeWidth={1.6} opacity={0.9} />

        {/* Orange route path (animated) */}
        <motion.path
          d={routePath}
          fill="none"
          stroke="var(--color-orange)"
          strokeWidth={2.2}
          strokeLinejoin="miter"
          strokeDasharray={dash}
          animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: dash }}
          initial={{ strokeDashoffset: dash }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
        />

        {/* Grey underlay path */}
        <motion.path
          d={routePath}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinejoin="miter"
          opacity={0.3}
          strokeDasharray={dash}
          animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: dash }}
          initial={{ strokeDashoffset: dash }}
          transition={{ duration: 10, ease: 'linear', delay: 2.5, repeat: Infinity }}
        />
      </svg>

      {/* Pins */}
      {([
        { style: { left: 6,   top: 90 }, activateAt: 0.10, deactivateAt: 0.90 },
        { style: { left: 216, top: 18 }, activateAt: 0.61, deactivateAt: 0.90 },
        { style: { left: 384, top: 54 }, activateAt: 0.80, deactivateAt: 0.90 },
      ] as const).map((pin, i) => (
        <motion.span
          key={i}
          variants={pinVariants(pin.activateAt, pin.deactivateAt)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            position: 'absolute',
            width: 10,
            height: 10,
            backgroundColor: 'var(--color-orange)',
            borderRadius: '50%',
            boxShadow: '0 0 0 4px rgba(255,94,26,0.18)',
            transformOrigin: 'center',
            left: pin.style.left,
            top: pin.style.top,
          }}
        />
      ))}
    </div>
  )
}
