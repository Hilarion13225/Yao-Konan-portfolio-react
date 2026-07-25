import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fr'
    return localStorage.getItem('portfolio-lang') || 'fr'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  function toggleLang() {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'))
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
