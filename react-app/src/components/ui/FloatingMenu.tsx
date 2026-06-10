import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface MenuOption {
  label: string
  href?: string
  onClick?: () => void
}

interface FloatingMenuProps {
  options: MenuOption[]
  className?: string
}

/* ── Hamburger icon — 3 çizgi → X animasyonu ─────────────── */
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  const lineBase = 'block absolute left-0 h-[2px] w-full rounded-full bg-white transition-all duration-300 ease-in-out'
  return (
    <span className="relative block w-5 h-[14px]">
      <span className={cn(lineBase, 'top-0', isOpen && 'top-[6px] rotate-45')} />
      <span className={cn(lineBase, 'top-[6px]', isOpen && 'opacity-0 scale-x-0')} />
      <span className={cn(lineBase, 'top-[12px]', isOpen && 'top-[6px] -rotate-45')} />
    </span>
  )
}

export function FloatingMenu({ options, className }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn('fixed bottom-8 right-8 z-[2000]', className)}>

      {/* Toggle butonu */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: isOpen ? '#FF5E1A' : 'rgba(10,10,10,0.85)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
          transition: 'background-color 0.25s ease',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <HamburgerIcon isOpen={isOpen} />
      </button>

      {/* Menü öğeleri */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: 60,
              right: 0,
              marginBottom: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 6,
            }}
          >
            {options.map((option, i) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
              >
                {option.href ? (
                  <a
                    href={option.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      backgroundColor: 'rgba(10,10,10,0.88)',
                      color: '#fff',
                      fontFamily: 'var(--font-label)',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      borderRadius: 4,
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                      whiteSpace: 'nowrap',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FF5E1A')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(10,10,10,0.88)')}
                  >
                    {option.label}
                  </a>
                ) : (
                  <button
                    onClick={() => { option.onClick?.(); setIsOpen(false) }}
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      backgroundColor: 'rgba(10,10,10,0.88)',
                      color: '#fff',
                      fontFamily: 'var(--font-label)',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: 4,
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                      whiteSpace: 'nowrap',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FF5E1A')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(10,10,10,0.88)')}
                  >
                    {option.label}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
