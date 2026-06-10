export function BroadcastIcon() {
  return (
    <div
      style={{
        marginTop: 32,
        height: 120,
        border: '1px solid var(--color-line)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
          'linear-gradient(rgba(10,10,10,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.045) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      {/* Wave 2 (outer) */}
      <span
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          top: -60,
          border: '1.5px solid var(--color-orange)',
          borderRadius: '50%',
          opacity: 0.3,
        }}
      />
      {/* Wave 1 (inner) */}
      <span
        style={{
          position: 'absolute',
          width: 140,
          height: 140,
          top: -30,
          border: '1.5px solid var(--color-orange)',
          borderRadius: '50%',
          opacity: 0.6,
        }}
      />
      {/* Truck body */}
      <span
        style={{
          position: 'relative',
          width: 88,
          height: 48,
          border: '1.5px solid var(--color-ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: 6,
            backgroundColor: 'var(--color-ink)',
            opacity: 0.85,
          }}
        />
        {/* Cab */}
        <span
          style={{
            position: 'absolute',
            left: -22,
            top: 14,
            width: 24,
            height: 20,
            border: '1.5px solid var(--color-ink)',
          }}
        />
      </span>
    </div>
  )
}
