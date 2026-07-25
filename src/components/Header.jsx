import { useEffect, useState } from 'react'
import { navLinks } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { lang, toggleLang, t } = useLanguage()

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

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
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
          <button className="mobile-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <nav>
          <ul className={`nav-list ${open ? 'open' : ''}`}>
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
      </div>
    </header>
  )
}
