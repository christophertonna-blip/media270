import logoUrl from '@/assets/svgs/m270_lockup_color.svg'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/media270' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/media270' },
  { label: 'YouTube',   href: 'https://youtube.com/@media270' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-line)',
        paddingBlock: 48,
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div
        className="container"
        style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 32 }}
      >
        {/* Logo */}
        <div>
          <img src={logoUrl} alt="Media270" style={{ height: 24, display: 'block' }} />
        </div>

        {/* Social */}
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, justifyContent: 'center' }}>
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-label)',
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.10em',
            color: 'var(--color-muted)',
            textAlign: 'right',
          }}
        >
          © {year} Media270. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
