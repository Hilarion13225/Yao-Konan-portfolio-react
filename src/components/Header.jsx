import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { navLinks } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { lang, toggleLang, t } = useLanguage()

  const headerRef = useRef(null)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  // Mesure la vraie hauteur du header et l'expose en variable CSS
  // (évite tout décalage entre le header et le menu déroulant mobile).
  // Mesurée à plusieurs moments car les polices Google Fonts et les
  // icônes Font Awesome se chargent de façon asynchrone et peuvent
  // faire varier la hauteur réelle après le premier rendu.
  useLayoutEffect(() => {
    const el = headerRef.current
    if (!el) return

    const setHeaderHeight = () => {
      const height = el.getBoundingClientRect().height
      // Garde-fou : une mesure prise avant la fin du layout peut
      // renvoyer une valeur anormalement petite ; on l'ignore plutôt
      // que de figer un mauvais décalage pour le menu mobile.
      if (height >= 40) {
        document.documentElement.style.setProperty('--header-h', `${height}px`)
      }
    }

    setHeaderHeight()

    const observer = new ResizeObserver(setHeaderHeight)
    observer.observe(el)

    window.addEventListener('load', setHeaderHeight)
    document.fonts?.ready?.then(setHeaderHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('load', setHeaderHeight)
    }
  }, [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120
        if (window.scrollY >= top) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile au clic extérieur, à la touche Échap,
  // et bloque le scroll de la page tant qu'il est ouvert.
  useEffect(() => {
    if (!open) return

    function onClickOutside(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <header ref={headerRef} className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          <span className="brand-badge">KY</span>
          <span className="brand-text">
            KONAN Yao
            <small>{t.hero.role}</small>
          </span>
        </a>

        <div className="header-actions">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Changer de langue / Switch language"
          >
            <span className={`lang-option ${lang === 'fr' ? 'active' : ''}`}>FR</span>
            <span className="lang-sep">/</span>
            <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
          </button>
          <button
            ref={toggleRef}
            className="mobile-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
          >
            <i className={open ? 'fas fa-xmark' : 'fas fa-bars'}></i>
          </button>
        </div>

        <nav>
          <ul
            id="primary-nav"
            ref={navRef}
            className={`nav-list ${open ? 'open' : ''}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
      </div>
    </header>
  )
}
