import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useFinePointer } from '../../hooks/useMediaQuery.js'
import { cn } from '../../utils/cn.js'

const VARIANTS = {
  primary:
    'bg-fg text-bg hover:bg-accent hover:text-white shadow-[0_0_0_1px_var(--line)]',
  accent: 'bg-accent text-white hover:bg-accent-strong',
  ghost: 'border border-line-strong text-fg hover:border-fg/60 hover:bg-fg/[0.04]',
}
const SIZES = {
  md: 'h-12 px-6 text-[0.95rem]',
  sm: 'h-10 px-4 text-sm',
}

const MotionLink = motion.create(Link)

// Bouton / lien avec un léger effet magnétique sur desktop.
export default function Button({ to, href, variant = 'primary', size = 'md', magnetic = true, className, children, ...props }) {
  const ref = useRef(null)
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const active = magnetic && fine && !reduce

  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })

  function onMove(e) {
    if (!active || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
  }
  function onLeave() {
    x.set(0)
    y.set(0)
  }

  const classes = cn(
    'group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300',
    VARIANTS[variant],
    SIZES[size],
    className,
  )
  const shared = { ref, className: classes, style: { x, y }, onPointerMove: onMove, onPointerLeave: onLeave, 'data-cursor': 'hover', ...props }

  if (to) return <MotionLink to={to} {...shared}>{children}</MotionLink>
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <motion.a href={href} {...(external && { target: '_blank', rel: 'noreferrer' })} {...shared}>
        {children}
      </motion.a>
    )
  }
  return <motion.button type="button" {...shared}>{children}</motion.button>
}
