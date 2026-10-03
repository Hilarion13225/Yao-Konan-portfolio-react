import { useEffect } from 'react'
import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useFinePointer } from '../../hooks/useMediaQuery.js'
import Portrait from '../../components/common/Portrait.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { cn } from '../../utils/cn.js'

// Le portrait au centre d'un système : CODE, DATA et AI convergent, PRODUCTS en sort.
// Repère SVG 400×500, calqué sur le cadre 4/5 du portrait.
const CX = 200
const CY = 215
const R = 182

const NODES = [
  { id: 'data', x: CX, y: CY - R, path: `M${CX} ${CY - R + 16} V${CY - R + 62}` },
  { id: 'code', x: CX - R, y: CY, path: `M${CX - R + 30} ${CY} H${CX - R + 76}` },
  { id: 'ai', x: CX + R, y: CY, path: `M${CX + R - 24} ${CY} H${CX + R - 70}` },
  { id: 'products', x: CX, y: CY + R + 58, path: `M${CX} ${CY + R - 6} V${CY + R + 42}`, out: true },
]

// Technologies réellement utilisées, posées sur l'orbite.
const SATELLITES = [
  { label: 'PostgreSQL', angle: -130 },
  { label: 'MongoDB', angle: -50 },
  { label: 'Laravel', angle: 155 },
  { label: 'React', angle: 128 },
  { label: 'ML', angle: 25 },
  { label: 'LLM', angle: 52 },
]
const polar = (deg, r = R) => [CX + r * Math.cos((deg * Math.PI) / 180), CY + r * Math.sin((deg * Math.PI) / 180)]

export default function HeroVisual({ className }) {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const photoX = useTransform(sx, (v) => v * -8)
  const photoY = useTransform(sy, (v) => v * -8)
  const netX = useTransform(sx, (v) => v * 14)
  const netY = useTransform(sy, (v) => v * 14)

  useEffect(() => {
    if (!fine || reduce) return
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5)
      my.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [fine, reduce, mx, my])

  return (
    <div className={cn('relative aspect-[4/5] w-full', className)}>
      {/* Halo */}
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)]" />

      {/* Portrait, fondu dans l'arrière-plan */}
      <m.div
        style={{ x: photoX, y: photoY }}
        className="absolute animate-fade-in inset-x-[9%] bottom-[6%] top-[3%] [mask-image:radial-gradient(ellipse_54%_60%_at_50%_40%,#000_50%,transparent_92%)]"
      >
        <Portrait eager className="h-full w-full object-cover object-[50%_18%]" />
      </m.div>

      {/* Réseau en orbite */}
      <m.svg
        aria-hidden="true"
        viewBox="0 0 400 500"
        fill="none"
        style={{ x: netX, y: netY, animationDelay: '0.5s' }}
        className="absolute inset-0 animate-fade-in h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="hv-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="50%" stopColor="var(--line-strong)" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <circle cx={CX} cy={CY} r={R} stroke="url(#hv-ring)" />
        <circle cx={CX} cy={CY} r={R + 22} stroke="var(--line)" strokeDasharray="2 7" />

        {/* Point qui parcourt l'orbite */}
        <g className="origin-center animate-orbit [transform-box:fill-box] motion-reduce:animate-none">
          <circle cx={CX} cy={CY} r={R + 22} fill="none" />
          <circle cx={CX + R + 22} cy={CY} r="2.5" fill="var(--cyan)" />
        </g>

        {SATELLITES.map((s) => {
          const [x, y] = polar(s.angle)
          const outside = Math.cos((s.angle * Math.PI) / 180) >= 0
          return (
            <g key={s.label}>
              <circle cx={x} cy={y} r="3" fill="var(--bg)" stroke="var(--line-strong)" />
              <text
                x={x + (outside ? 9 : -9)}
                y={y + 3.5}
                textAnchor={outside ? 'start' : 'end'}
                className="fill-subtle font-mono"
                style={{ fontSize: 9.5, letterSpacing: '0.04em' }}
              >
                {s.label}
              </text>
            </g>
          )
        })}

        {NODES.map((n, i) => {
          const label = t.visual[n.id]
          const w = label.length * 8 + 24
          const color = n.out ? 'var(--cyan)' : 'var(--accent)'
          return (
            <g key={n.id}>
              <path d={n.path} stroke={color} strokeWidth="1.5" strokeDasharray="4 8" className="animate-flow" />
              {!reduce && (
                <circle r="2.5" fill={color}>
                  <animateMotion dur={`${2.2 + i * 0.3}s`} repeatCount="indefinite" path={n.path} />
                </circle>
              )}
              <rect x={n.x - w / 2} y={n.y - 13} width={w} height="26" rx="13" fill="var(--bg)" stroke="var(--line-strong)" />
              <text x={n.x} y={n.y + 4} textAnchor="middle" className="fill-fg font-mono" style={{ fontSize: 10, letterSpacing: '0.14em' }}>
                {label}
              </text>
            </g>
          )
        })}
      </m.svg>
    </div>
  )
}
