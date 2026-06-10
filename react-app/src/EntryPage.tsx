import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoUrl from '@/assets/svgs/m270_lockup_color.svg'

interface EntryPageProps {
  onEnter: () => void
}

export function EntryPage({ onEnter }: EntryPageProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="entry"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 48,
            cursor: 'default',
          }}
        >
          {/* Arka plan ince grid */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(10,10,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.04) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              pointerEvents: 'none',
            }}
          />

          {/* İçerik */}
          <div style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>

            {/* Logo */}
            <motion.img
              src={logoUrl}
              alt="Media270"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: 56, display: 'block' }}
            />

            {/* Alt çizgi aksan */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 48,
                height: 2,
                backgroundColor: '#FF5E1A',
                transformOrigin: 'left',
              }}
            />

            {/* Etiket */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
              style={{
                fontFamily: 'var(--font-label)',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(10,10,10,0.45)',
              }}
            >
              İstanbul · Mobil LED Reklam
            </motion.p>

            {/* Giriş butonu */}
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
              onClick={onEnter}
              whileHover={{ backgroundColor: '#ff4d00' }}
              style={{
                fontFamily: 'var(--font-label)',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#fff',
                backgroundColor: '#FF5E1A',
                border: 'none',
                padding: '16px 44px',
                cursor: 'pointer',
                transition: 'background-color 0.15s',
              }}
            >
              Keşfet →
            </motion.button>
          </div>

          {/* Alt köşe etiket */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              position: 'absolute',
              bottom: 32,
              right: 'calc(4vw)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.12em',
              color: 'rgba(10,10,10,0.30)',
              textTransform: 'uppercase',
            }}
          >
            1 Araç · PH-3 · İst-001
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              position: 'absolute',
              bottom: 32,
              left: 'calc(4vw)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.12em',
              color: 'rgba(10,10,10,0.30)',
              textTransform: 'uppercase',
            }}
          >
            © {new Date().getFullYear()} Media270
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
