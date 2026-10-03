import { cn } from '../../utils/cn.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Composition visuelle propre à chaque projet : capture d'écran encadrée
// ou illustration SVG lorsqu'aucune capture n'existe.
export default function ProjectVisual({ project, className, eager = false }) {
  const { visual } = project
  const accent = visual.accent

  return (
    <div
      className={cn('relative isolate overflow-hidden rounded-2xl border border-line bg-surface', className)}
      style={{ '--p-accent': accent }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(120% 90% at 85% 0%, color-mix(in srgb, ${accent} 22%, transparent), transparent 60%), radial-gradient(80% 70% at 0% 100%, color-mix(in srgb, ${accent} 10%, transparent), transparent 70%)`,
        }}
      />
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-70" />
      {visual.kind === 'screenshot' && <Screenshot project={project} eager={eager} />}
      {visual.kind === 'smartex' && <SmartexArt />}
      {visual.kind === 'water' && <WaterArt />}
    </div>
  )
}

function Screenshot({ project, eager }) {
  const host = project.links.live ? new URL(project.links.live).host : project.slug
  return (
    <div className="flex h-full items-end px-[6%] pt-[7%]">
      <div className="w-full overflow-hidden rounded-t-xl border border-b-0 border-line-strong bg-bg shadow-2xl shadow-black/40 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1.5">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="ml-3 truncate rounded bg-surface-2 px-2 py-0.5 font-mono text-[0.65rem] text-subtle">{host}</span>
        </div>
        <div className="overflow-hidden">
          <img
            src={project.visual.image}
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            width="1366"
            height="768"
            className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.035]"
          />
        </div>
      </div>
    </div>
  )
}

// Smartex SustWay : documents → agents IA → score E/S/G → plan d'action.
function SmartexArt() {
  const { t } = useLanguage()
  const a = 'var(--p-accent)'
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]" fill="none" aria-hidden="true">
      {/* Documents */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${70 + i * 14} ${110 + i * 16})`}>
          <rect width="120" height="150" rx="10" fill="var(--bg)" stroke="var(--line-strong)" />
          {[0, 1, 2, 3, 4, 5].map((l) => (
            <rect key={l} x="16" y={22 + l * 18} width={l % 3 === 2 ? 52 : 88} height="5" rx="2.5" fill="var(--line-strong)" />
          ))}
          {i === 2 && <rect x="16" y="40" width="88" height="5" rx="2.5" fill={a} opacity="0.9" />}
        </g>
      ))}
      {/* Flux vers les agents */}
      <path d="M232 205 C 280 205, 280 140, 320 140" stroke="var(--line-strong)" />
      <path d="M232 205 C 280 205, 280 270, 320 270" stroke="var(--line-strong)" />
      <path d="M232 205 H 320" stroke={a} strokeDasharray="4 10" className="animate-flow" />
      {/* Agents */}
      {[140, 205, 270].map((y, i) => (
        <g key={y}>
          <circle cx="336" cy={y} r="16" fill="var(--bg)" stroke={i === 1 ? a : 'var(--line-strong)'} />
          <circle cx="336" cy={y} r="4" fill={i === 1 ? a : 'var(--muted)'} />
          <path d={`M352 ${y} C 390 ${y}, 390 205, 418 205`} stroke="var(--line-strong)" />
        </g>
      ))}
      {/* Score ring */}
      <circle cx="480" cy="205" r="58" stroke="var(--line)" strokeWidth="10" />
      <circle cx="480" cy="205" r="58" stroke={a} strokeWidth="10" strokeLinecap="round" strokeDasharray="250 365" transform="rotate(-90 480 205)" />
      <text x="480" y="212" textAnchor="middle" className="fill-fg font-display" style={{ fontSize: 20, fontWeight: 600, letterSpacing: '0.12em' }}>ESG</text>
      {/* Barres E / S / G */}
      {['E', 'S', 'G'].map((k, i) => (
        <g key={k} transform={`translate(420 ${300 + i * 22})`}>
          <text x="0" y="8" className="fill-subtle font-mono" style={{ fontSize: 10 }}>{k}</text>
          <rect x="16" y="2" width="130" height="6" rx="3" fill="var(--line)" />
          <rect x="16" y="2" width={[96, 70, 110][i]} height="6" rx="3" fill={a} opacity={0.5 + i * 0.2} />
        </g>
      ))}
      <text x="70" y="64" className="fill-subtle font-mono" style={{ fontSize: 11, letterSpacing: '0.14em' }}>{t.visual.smartex}</text>
    </svg>
  )
}

// Smart Water Management : capteurs → ESP32 → données → ML → décision.
function WaterArt() {
  const { t } = useLanguage()
  const a = 'var(--p-accent)'
  const steps = [
    { x: 70, label: 'pH · TSS' },
    { x: 200, label: 'ESP32' },
    { x: 330, label: 'MongoDB' },
    { x: 460, label: 'ML' },
    { x: 580, label: t.visual.decide },
  ]
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]" fill="none" aria-hidden="true">
      {/* Vagues */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M0 ${300 + i * 22} C 80 ${285 + i * 22}, 160 ${315 + i * 22}, 240 ${300 + i * 22} S 400 ${285 + i * 22}, 480 ${300 + i * 22} S 600 ${315 + i * 22}, 640 ${300 + i * 22}`}
          stroke={a}
          opacity={0.45 - i * 0.12}
        />
      ))}
      {/* Pipeline */}
      <path d="M70 170 H 580" stroke="var(--line-strong)" />
      <path d="M70 170 H 580" stroke={a} strokeWidth="1.5" strokeDasharray="4 18" className="animate-flow" />
      {steps.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.x} cy="170" r={i === 4 ? 22 : 16} fill="var(--bg)" stroke={i === 0 || i === 4 ? a : 'var(--line-strong)'} />
          <circle cx={s.x} cy="170" r="4" fill={i === 0 || i === 4 ? a : 'var(--muted)'} />
          <text x={s.x} y="222" textAnchor="middle" className="fill-subtle font-mono" style={{ fontSize: 11, letterSpacing: '0.08em' }}>{s.label}</text>
        </g>
      ))}
      {/* Gouttes de capteurs */}
      {[40, 70, 100].map((x, i) => (
        <path key={x} d={`M${x} ${92 + i * 6} c -7 10 -10 15 -10 20 a 10 10 0 0 0 20 0 c 0 -5 -3 -10 -10 -20 z`} stroke={a} opacity={0.4 + i * 0.25} />
      ))}
      <text x="440" y="96" className="fill-subtle font-mono" style={{ fontSize: 11, letterSpacing: '0.14em' }}>{t.visual.water}</text>
    </svg>
  )
}
