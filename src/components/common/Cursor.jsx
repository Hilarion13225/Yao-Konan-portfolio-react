import { useEffect, useState } from 'react'
import { AnimatePresence, m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useFinePointer } from '../../hooks/useMediaQuery.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Curseur personnalisé — desktop uniquement, désactivé en reduced motion.
export default function Cursor() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const enabled = fine && !reduce
  return enabled ? <CursorInner /> : null
}

function CursorInner() {
  const { lang } = useLanguage()
  const [mode, setMode] = useState('default') // default | hover | view | text | hidden
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.5 })
  const ry = useSpring(y, { stiffness: 380, damping: 32, mass: 0.5 })

  useEffect(() => {
    document.documentElement.classList.add('has-custom-cursor')

    function onMove(e) {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target instanceof Element ? e.target : null
      if (!target) return
      if (target.closest('input, textarea, select')) setMode('text')
      else if (target.closest('[data-cursor="view"]')) setMode('view')
      else if (target.closest('a, button, [data-cursor="hover"], label')) setMode('hover')
      else setMode('default')
    }
    const onLeave = () => setMode('hidden')

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [x, y])

  const ring = {
    default: { width: 34, height: 34, opacity: 1 },
    hover: { width: 56, height: 56, opacity: 1 },
    view: { width: 92, height: 92, opacity: 1 },
    text: { width: 34, height: 34, opacity: 0 },
    hidden: { width: 34, height: 34, opacity: 0 },
  }[mode]

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <m.div
        className="absolute left-0 top-0 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-fg/40"
        style={{ x: rx, y: ry, backgroundColor: mode === 'view' ? 'var(--fg)' : 'transparent' }}
        animate={ring}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      >
        <AnimatePresence>
          {mode === 'view' && (
            <m.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="font-mono text-[0.7rem] uppercase tracking-widest text-bg"
            >
              {lang === 'fr' ? 'Voir' : 'View'}
            </m.span>
          )}
        </AnimatePresence>
      </m.div>
      <m.div
        className="absolute left-0 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg"
        style={{ x, y }}
        animate={{ opacity: mode === 'hidden' || mode === 'view' || mode === 'text' ? 0 : 1 }}
      />
    </div>
  )
}
