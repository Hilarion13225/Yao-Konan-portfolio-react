import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { navItems, site, socials } from '../../config/site.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SocialLink from '../ui/SocialLink.jsx'
import { pad } from '../../utils/format.js'

const EASE = [0.22, 1, 0.36, 1]

// Menu plein écran (mobile / tablette).
export default function MobileMenu({ open, onClose }) {
  const { tr, t } = useLanguage()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    panelRef.current?.querySelector('a')?.focus()
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-bg px-5 pb-8 pt-24 lg:hidden"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <nav aria-label={t.nav.primary} className="relative flex-1">
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  className="border-b border-line"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.05 }}
                >
                  <Link to={`/#${item.id}`} onClick={onClose} className="flex items-baseline gap-4 py-4">
                    <span className="font-mono text-xs text-subtle">{pad(i + 1)}</span>
                    <span className="font-display text-[clamp(2rem,9vw,3rem)] font-medium leading-none tracking-tight">
                      {tr(item.label)}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative mt-8 flex flex-col gap-6"
          >
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 break-all text-sm text-muted">
              {site.email} <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
            <div className="flex gap-5 text-xl">
              {socials
                .filter((s) => s.key !== 'email')
                .map((s) => (
                  <SocialLink key={s.key} social={s} />
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
