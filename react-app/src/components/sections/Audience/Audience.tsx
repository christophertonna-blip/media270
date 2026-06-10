import { motion } from 'framer-motion'
import { sectionContainerVariants } from '@/lib/variants'
import { LiveBanner } from './LiveBanner'
import { AudienceCard } from './AudienceCard'

/* ── Inline SVG visualizations ─────────────────────────── */
function VizEvent() {
  return (
    <svg viewBox="0 0 320 140" preserveAspectRatio="none" aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <g stroke="currentColor" strokeWidth={0.5} opacity={0.15}>
        <line x1={0} y1={35} x2={320} y2={35} /><line x1={0} y1={70} x2={320} y2={70} />
        <line x1={0} y1={105} x2={320} y2={105} /><line x1={80} y1={0} x2={80} y2={140} />
        <line x1={160} y1={0} x2={160} y2={140} /><line x1={240} y1={0} x2={240} y2={140} />
      </g>
      <circle cx={160} cy={70} r={54} fill="none" stroke="var(--color-orange)" strokeWidth={1} opacity={0.35} />
      <circle cx={160} cy={70} r={38} fill="none" stroke="var(--color-orange)" strokeWidth={1} opacity={0.55} />
      <circle cx={160} cy={70} r={22} fill="none" stroke="var(--color-orange)" strokeWidth={1.2} opacity={0.85} />
      <circle cx={160} cy={70} r={6} fill="var(--color-orange)" />
      <g fontFamily="DM Mono, monospace" fontSize={9} fill="currentColor" opacity={0.55}>
        <text x={232} y={73}>+R500</text>
        <text x={82} y={73} textAnchor="end">EVT-01</text>
      </g>
    </svg>
  )
}

function VizAgency() {
  return (
    <svg viewBox="0 0 320 140" preserveAspectRatio="none" aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <g stroke="currentColor" strokeWidth={0.5} opacity={0.15}>
        <line x1={0} y1={35} x2={320} y2={35} /><line x1={0} y1={70} x2={320} y2={70} />
        <line x1={0} y1={105} x2={320} y2={105} />
      </g>
      <polyline points="10,110 50,92 90,98 130,72 170,80 210,52 250,46 300,28"
        fill="none" stroke="var(--color-orange)" strokeWidth={1.8} />
      <g fill="currentColor">
        <circle cx={50} cy={92} r={2.5} /><circle cx={130} cy={72} r={2.5} />
        <circle cx={210} cy={52} r={2.5} /><circle cx={300} cy={28} r={3.5} fill="var(--color-orange)" />
      </g>
      <g stroke="currentColor" strokeWidth={0.4} opacity={0.35} strokeDasharray="2 3">
        <line x1={300} y1={28} x2={300} y2={130} /><line x1={10} y1={28} x2={300} y2={28} />
      </g>
      <g fontFamily="DM Mono, monospace" fontSize={9} fill="currentColor" opacity={0.55}>
        <text x={10} y={24}>+18M</text>
        <text x={10} y={130}>W01</text>
        <text x={288} y={130} textAnchor="end">W08</text>
      </g>
    </svg>
  )
}

function VizSmb() {
  return (
    <svg viewBox="0 0 320 140" preserveAspectRatio="none" aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <g stroke="currentColor" strokeWidth={0.5} opacity={0.15}>
        <line x1={0} y1={35} x2={320} y2={35} /><line x1={0} y1={70} x2={320} y2={70} />
        <line x1={0} y1={105} x2={320} y2={105} /><line x1={80} y1={0} x2={80} y2={140} />
        <line x1={160} y1={0} x2={160} y2={140} /><line x1={240} y1={0} x2={240} y2={140} />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth={1} opacity={0.45}>
        <circle cx={60} cy={40} r={5} /><circle cx={260} cy={45} r={5} />
        <circle cx={95} cy={100} r={5} /><circle cx={225} cy={95} r={5} />
        <circle cx={180} cy={60} r={5} />
      </g>
      <circle cx={160} cy={70} r={9} fill="var(--color-orange)" />
      <circle cx={160} cy={70} r={18} fill="none" stroke="var(--color-orange)" strokeWidth={1} opacity={0.5} />
      <g stroke="currentColor" strokeWidth={0.5} opacity={0.35} strokeDasharray="2 3">
        <line x1={160} y1={70} x2={60} y2={40} /><line x1={160} y1={70} x2={260} y2={45} />
        <line x1={160} y1={70} x2={95} y2={100} /><line x1={160} y1={70} x2={225} y2={95} />
        <line x1={160} y1={70} x2={180} y2={60} />
      </g>
      <g fontFamily="DM Mono, monospace" fontSize={9} fill="currentColor" opacity={0.55}>
        <text x={168} y={90}>HUB</text>
      </g>
    </svg>
  )
}

/* ── Card data ───────────────────────────────────────────── */
const cards = [
  {
    index:       '01 / EVENT',
    title:       <>{`Etkinlik`}<br />{`Organizatörleri`}</>,
    description: 'Konser, lansman ve festival çevresinde rota yayını. Kreatifiniz hazırsa onu yayınlarız; yoksa içerik üretimi hizmetimizle yayına hazır hale getiririz.',
    useCases:    [{ text: 'Konser tanıtımları' }, { text: 'Lansman günü canlı duyuru' }, { text: 'Festival alanı yön bilgilendirme' }],
    viz:         <VizEvent />,
    vizTag:      'SIG / EVT',
    code:        '/ETK-A',
  },
  {
    index:       '02 / AGENCY',
    title:       <>{`Medya`}<br />{`Ajansları`}</>,
    description: 'Çerçeve anlaşma ile müşteri kampanyalarınızı birlikte yürütüyoruz. Her kampanya sonunda rota log\'u, izlenim tahmini ve foto kanıtla beraber detaylı raporlama maille teslim edilir.',
    useCases:    [{ text: 'Marka kampanyası için kreatif rotasyon' }, { text: 'Aylık dış mekan görünürlük planı' }, { text: 'Müşteri raporu için yayın özetleri' }],
    viz:         <VizAgency />,
    vizTag:      'CH / IMP',
    code:        '/AJN-B',
  },
  {
    index:       '03 / SMB',
    title:       <>{`KOBİ'ler`}<br />{`& Markalar`}</>,
    description: 'Paylaşımlı kullanım modeli ile her ölçekten KOBİ\'ye ve markaya hizmet veriyoruz — tek bir LED truck\'ın esnek gücüyle.',
    useCases:    [{ text: 'Mağaza açılış duyurusu' }, { text: 'Kampanya duyuruları' }, { text: 'Yerel etkinlik tanıtımı' }],
    viz:         <VizSmb />,
    vizTag:      'SHR / SMB',
    code:        '/KOB-C',
  },
]

export function Audience() {
  return (
    <section
      id="kime"
      style={{
        paddingBlock: 'var(--section-pad, 140px)',
        borderBottom: '1px solid var(--color-line)',
        backgroundColor: 'var(--color-cream)',
      }}
    >
      <div className="container">
        {/* Section Head */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            marginBottom: 80,
            alignItems: 'end',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--color-muted)', marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-orange)' }}>/ 02</span>
              <span style={{ fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12 }}>Kime Hizmet</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 800,
                textTransform: 'uppercase',
                fontSize: 'var(--section-size, 72px)',
                lineHeight: 0.92,
                letterSpacing: '-0.01em',
                maxWidth: 600,
              }}
            >
              Üç Ekip İçin<br />Operasyonel<br />Altyapı.
            </h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'color-mix(in oklab, var(--color-ink) 70%, transparent)', maxWidth: 520 }}>
            Ajans ve etkinlik şirketleriyle uzun süreli çerçeve anlaşmaları yapıyoruz.
            KOBİ'ler için ise paketli, sabit fiyatlı yayın blokları sunuyoruz.
          </p>
        </div>

        <LiveBanner />

        {/* Cards */}
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
        >
          {cards.map((card) => (
            <AudienceCard key={card.code} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
