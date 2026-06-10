import { LiveDot } from '@/components/ui/LiveDot'

interface LiveBannerProps {
  currentLocation?: string
}

export function LiveBanner({ currentLocation = 'LEVENT · BÜYÜKDERE CAD.' }: LiveBannerProps) {
  return (
    <div
      style={{
        marginBottom: 40,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto auto',
        alignItems: 'center',
        gap: 32,
        padding: '22px 28px',
        border: '1px solid var(--color-ink)',
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
      }}
    >
      {/* Mini map */}
      <div
        aria-hidden="true"
        style={{
          width: 72,
          height: 48,
          border: '1px solid currentColor',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <svg viewBox="0 0 72 48" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <g stroke="currentColor" strokeWidth={0.5} opacity={0.35}>
            <line x1={0} y1={12} x2={72} y2={12} />
            <line x1={0} y1={24} x2={72} y2={24} />
            <line x1={0} y1={36} x2={72} y2={36} />
            <line x1={18} y1={0} x2={18} y2={48} />
            <line x1={36} y1={0} x2={36} y2={48} />
            <line x1={54} y1={0} x2={54} y2={48} />
          </g>
          <path
            d="M6,36 L18,36 L18,24 L36,24 L36,12 L48,12 L48,22"
            fill="none"
            stroke="var(--color-orange)"
            strokeWidth={1.5}
            strokeLinejoin="miter"
          />
        </svg>
        {/* Pulsing location pin */}
        <span style={{ position: 'absolute', left: 44, top: 18 }}>
          <LiveDot size={8} />
        </span>
      </div>

      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.06em',
            color: 'var(--color-orange)',
            textTransform: 'uppercase',
          }}
        >
          <LiveDot size={6} />
          CANLI · ŞU AN YAYINDA
        </span>
        <span
          style={{
            fontFamily: 'var(--font-title)',
            fontWeight: 800,
            textTransform: 'uppercase',
            fontSize: 26,
            lineHeight: 1,
            letterSpacing: '0.005em',
          }}
        >
          Canlı Yayın Haritası
        </span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'color-mix(in oklab, currentColor 75%, transparent)' }}>
          Aracın anlık konumu, rota geçmişi ve sıradaki durakları — pin'lerle.
        </span>
      </div>

      {/* Location */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'color-mix(in oklab, currentColor 75%, transparent)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 4,
        }}
      >
        <span>Şu an</span>
        <span style={{ color: 'var(--color-ink)', fontWeight: 500 }}>{currentLocation}</span>
      </div>

      {/* Arrow */}
      <span
        style={{
          fontFamily: 'var(--font-label)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          fontSize: 12,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        Haritayı Aç <span style={{ color: 'var(--color-orange)' }}>→</span>
      </span>
    </div>
  )
}
