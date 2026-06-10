import logoUrl from '@/assets/svgs/m270_lockup_color.svg'
import { Button } from '@/components/ui/Button'
import { LiveDot } from '@/components/ui/LiveDot'

const links = [
  { label: 'Nasıl Çalışır', href: '#nasil' },
  { label: 'Kime Hizmet',   href: '#kime' },
  {
    label: 'Canlı Harita',
    href:  '#kime',
    live:  true,
  },
  { label: 'İletişim',      href: '#iletisim' },
]

export function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: 'color-mix(in oklab, var(--color-bg) 80%, transparent)',
        borderBottom: '1px solid var(--color-line)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoUrl} alt="Media270" style={{ height: 28, display: 'block' }} />
        </a>

        {/* Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0 }}>
          {links.map((l) => (
            <li key={l.href + l.label}>
              <a
                href={l.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  fontFamily: 'var(--font-label)',
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                  opacity: 0.75,
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
              >
                {l.live && <LiveDot size={5} />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button href="mailto:teklif@media270.com" variant="primary">
          Teklif Al
        </Button>
      </div>
    </nav>
  )
}
