import { useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useFinePointer } from '../../hooks/useMediaQuery.js'

// Système visuel abstrait : CODE, DATA et AI convergent vers le noyau, qui produit des PRODUCTS.
const C = 280
const NODES = [
  { id: 'data', label: 'DATA', x: C, y: 64, path: `M${C} 84 V${C - 40}` },
  { id: 'code', label: 'CODE', x: 56, y: C, path: `M86 ${C} H${C - 92}` },
  { id: 'ai', label: 'AI', x: 504, y: C, path: `M474 ${C} H${C + 92}` },
  { id: 'products', label: 'PRODUCTS', x: C, y: 496, path: `M${C} ${C + 40} V476`, out: true },
]

// Petits satellites : technologies réellement utilisées, reliées à leur axe.
const SATELLITES = [
  { label: 'PostgreSQL', x: 150, y: 120, to: [C - 10, 84] },
  { label: 'MongoDB', x: 412, y: 116, to: [C + 10, 84] },
  { label: 'React', x: 88, y: 392, to: [86, C + 8] },
  { label: 'Laravel', x: 92, y: 168, to: [86, C - 8] },
  { label: 'ML', x: 470, y: 176, to: [474, C - 8] },
  { label: 'LLM', x: 462, y: 392, to: [474, C + 8] },
]

export default function HeroVisual({ className }) {
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const farX = useTransform(sx, (v) => v * -10)
  const farY = useTransform(sy, (v) => v * -10)
  const nearX = useTransform(sx, (v) => v * 16)
  const nearY = useTransform(sy, (v) => v * 16)

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
    <div aria-hidden="true" className={className}>
      <svg viewBox="0 0 560 560" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hv-core" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>

        {/* Couche lointaine : halo + orbites */}
        <motion.g style={{ x: farX, y: farY }}>
          <circle cx={C} cy={C} r="250" fill="url(#hv-glow)" />
          <circle cx={C} cy={C} r="150" stroke="var(--line-strong)" strokeDasharray="2 6" />
          <circle cx={C} cy={C} r="226" stroke="var(--line)" />
          <motion.g
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          >
            {/* cercle invisible : centre la boîte englobante pour une rotation autour du noyau */}
            <circle cx={C} cy={C} r="226" fill="none" />
            <circle cx={C + 150} cy={C} r="2.5" fill="var(--cyan)" />
            <circle cx={C - 106} cy={C - 106} r="2" fill="var(--muted)" />
            <circle cx={C} cy={C + 226} r="2" fill="var(--accent)" />
          </motion.g>
        </motion.g>

        {/* Satellites */}
        <g>
          {SATELLITES.map((s) => (
            <g key={s.label}>
              <path d={`M${s.x} ${s.y} L${s.to[0]} ${s.to[1]}`} stroke="var(--line)" />
              <circle cx={s.x} cy={s.y} r="3" fill="var(--bg)" stroke="var(--line-strong)" />
              <text
                x={s.x}
                y={s.y - 10}
                textAnchor="middle"
                className="fill-subtle font-mono"
                style={{ fontSize: 10, letterSpacing: '0.04em' }}
              >
                {s.label}
              </text>
            </g>
          ))}
        </g>

        {/* Flux principaux */}
        {NODES.map((n, i) => (
          <g key={n.id}>
            <path d={n.path} stroke="var(--line-strong)" />
            <path
              d={n.path}
              stroke={n.out ? 'var(--cyan)' : 'var(--accent)'}
              strokeWidth="1.5"
              strokeDasharray="4 20"
              className="animate-flow"
              style={{ animationDelay: `${i * -0.6}s` }}
            />
            {!reduce && (
              <circle r="3" fill={n.out ? 'var(--cyan)' : 'var(--accent)'}>
                <animateMotion dur={`${2.6 + i * 0.3}s`} repeatCount="indefinite" path={n.path} />
              </circle>
            )}
          </g>
        ))}

        {/* Couche proche : nœuds et noyau */}
        <motion.g style={{ x: nearX, y: nearY }}>
          {NODES.map((n) => {
            const w = n.label.length * 9 + 28
            return (
              <g key={n.id}>
                <rect x={n.x - w / 2} y={n.y - 15} width={w} height="30" rx="15" fill="var(--bg)" stroke="var(--line-strong)" />
                <text
                  x={n.x}
                  y={n.y + 4}
                  textAnchor="middle"
                  className="fill-fg font-mono"
                  style={{ fontSize: 11, letterSpacing: '0.14em' }}
                >
                  {n.label}
                </text>
              </g>
            )
          })}

          <g>
            <rect x={C - 92} y={C - 40} width="184" height="80" rx="14" fill="var(--surface)" stroke="url(#hv-core)" strokeWidth="1.25" />
            <rect x={C - 92} y={C - 40} width="184" height="22" rx="14" fill="var(--surface-2)" />
            <circle cx={C - 78} cy={C - 29} r="2.5" fill="var(--line-strong)" />
            <circle cx={C - 69} cy={C - 29} r="2.5" fill="var(--line-strong)" />
            <circle cx={C - 60} cy={C - 29} r="2.5" fill="var(--line-strong)" />
            <text
              x={C}
              y={C + 14}
              textAnchor="middle"
              className="fill-fg font-display"
              style={{ fontSize: 19, fontWeight: 600, letterSpacing: '0.04em' }}
            >
              YAO<tspan fill="var(--cyan)">.</tspan>KONAN
            </text>
            <circle cx={C + 78} cy={C - 29} r="3" fill="var(--cyan)" className="animate-pulse-soft" style={{ transformOrigin: `${C + 78}px ${C - 29}px` }} />
          </g>
        </motion.g>
      </svg>
    </div>
  )
}
