import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { navItems } from '../../config/site.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import Brand from '../navigation/Brand.jsx'
import MobileMenu from '../navigation/MobileMenu.jsx'
import Button from '../ui/Button.jsx'
import { LangToggle, ThemeToggle } from '../common/Preferences.jsx'
import { cn } from '../../utils/cn.js'

const SECTION_IDS = navItems.map((n) => n.id)

export default function Header() {
  const { tr, t } = useLanguage()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS, pathname === '/')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))
  useEffect(() => setOpen(false), [pathname])
  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            'border-b transition-[background-color,border-color] duration-500',
            scrolled || open
              ? 'border-line bg-[var(--header-bg)] backdrop-blur-xl backdrop-saturate-150'
              : 'border-transparent',
          )}
        >
          <div className="container-page flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
            <Brand onClick={close} />

            <nav aria-label={t.nav.primary} className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = active === item.id
                  return (
                    <li key={item.id}>
                      <Link
                        to={`/#${item.id}`}
                        aria-current={isActive ? 'true' : undefined}
                        className={cn(
                          'relative px-3 py-2 text-sm transition-colors',
                          isActive ? 'text-fg' : 'text-muted hover:text-fg',
                        )}
                      >
                        {tr(item.label)}
                        {isActive && (
                          <motion.span layoutId="nav-indicator" className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
              <span className="ml-1 hidden md:block">
                <Button to="/#contact" size="sm">
                  {t.nav.cta}
                </Button>
              </span>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? t.nav.close : t.nav.menu}
                className="relative grid size-9 place-items-center rounded-full border border-line lg:hidden"
              >
                <span
                  aria-hidden="true"
                  className={cn('absolute h-px w-4 bg-fg transition-transform duration-300', open ? 'rotate-45' : '-translate-y-[3px]')}
                />
                <span
                  aria-hidden="true"
                  className={cn('absolute h-px w-4 bg-fg transition-transform duration-300', open ? '-rotate-45' : 'translate-y-[3px]')}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <MobileMenu open={open} onClose={close} />
    </>
  )
}
