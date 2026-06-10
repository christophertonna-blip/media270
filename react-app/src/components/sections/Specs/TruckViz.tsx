import { CornerBrackets } from '@/components/ui/CornerBrackets'

export function TruckViz() {
  return (
    <div
      style={{
        marginTop: 48,
        position: 'relative',
        border: '1px solid var(--color-line-strong)',
        padding: '36px 40px 24px',
        background: `
          linear-gradient(rgba(10,10,10,0.045) 1px, transparent 1px) 0 0/24px 24px,
          linear-gradient(90deg, rgba(10,10,10,0.045) 1px, transparent 1px) 0 0/24px 24px,
          var(--color-bg)
        `,
      }}
    >
      <CornerBrackets />
      <svg
        viewBox="0 0 520 240"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        style={{ display: 'block', width: '100%', height: 'auto', color: 'var(--color-ink)' }}
      >
        {/* Ground lines */}
        <g stroke="currentColor" strokeWidth={0.6} opacity={0.18}>
          <line x1={0} y1={200} x2={520} y2={200} />
          <line x1={0} y1={220} x2={520} y2={220} />
        </g>
        {/* Width dimension */}
        <g stroke="currentColor" strokeWidth={0.8} opacity={0.45}>
          <line x1={125} y1={30} x2={475} y2={30} />
          <line x1={125} y1={24} x2={125} y2={36} />
          <line x1={475} y1={24} x2={475} y2={36} />
        </g>
        <text x={300} y={20} textAnchor="middle" fontFamily="DM Mono, monospace" fontSize={11} fill="currentColor" opacity={0.65}>
          3840 mm
        </text>
        {/* Cab */}
        <rect x={40} y={110} width={85} height={90} fill="none" stroke="currentColor" strokeWidth={1.5} />
        <rect x={52} y={120} width={60} height={40} fill="currentColor" opacity={0.1} />
        {/* Screen frame */}
        <rect x={125} y={50} width={350} height={150} fill="var(--color-ink)" />
        <rect x={135} y={60} width={330} height={130} fill="var(--color-orange)" />
        {/* Screen grid */}
        <g stroke="rgba(0,0,0,0.16)" strokeWidth={0.6}>
          <line x1={135} y1={92} x2={465} y2={92} />
          <line x1={135} y1={125} x2={465} y2={125} />
          <line x1={135} y1={158} x2={465} y2={158} />
          <line x1={190} y1={60} x2={190} y2={190} />
          <line x1={245} y1={60} x2={245} y2={190} />
          <line x1={300} y1={60} x2={300} y2={190} />
          <line x1={355} y1={60} x2={355} y2={190} />
          <line x1={410} y1={60} x2={410} y2={190} />
        </g>
        {/* Brand text on screen */}
        <text x={300} y={140} textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight={800} fontSize={66} fill="#0A0A0A" letterSpacing={2}>
          MEDIA270
        </text>
        {/* Height dimension */}
        <g stroke="currentColor" strokeWidth={0.8} opacity={0.45}>
          <line x1={488} y1={50} x2={488} y2={200} />
          <line x1={482} y1={50} x2={494} y2={50} />
          <line x1={482} y1={200} x2={494} y2={200} />
        </g>
        <text x={500} y={128} textAnchor="start" fontFamily="DM Mono, monospace" fontSize={11} fill="currentColor" opacity={0.65} transform="rotate(90 500 128)">
          2240 mm
        </text>
        {/* Wheels */}
        <circle cx={70} cy={210} r={14} fill="none" stroke="currentColor" strokeWidth={1.5} />
        <circle cx={70} cy={210} r={5} fill="currentColor" />
        <circle cx={360} cy={210} r={14} fill="none" stroke="currentColor" strokeWidth={1.5} />
        <circle cx={360} cy={210} r={5} fill="currentColor" />
        <circle cx={395} cy={210} r={14} fill="none" stroke="currentColor" strokeWidth={1.5} />
        <circle cx={395} cy={210} r={5} fill="currentColor" />
      </svg>
    </div>
  )
}
