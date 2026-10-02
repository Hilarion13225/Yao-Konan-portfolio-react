import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from './ui.js'

const STORAGE_KEY = 'portfolio-lang'
const LanguageContext = createContext(null)

function readInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    // stockage indisponible (navigation privée…) : on garde le français
  }
  return 'fr'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang])

  const toggleLang = useCallback(() => setLang((l) => (l === 'fr' ? 'en' : 'fr')), [])

  // `tr` résout une valeur bilingue { fr, en } ; une chaîne simple est renvoyée telle quelle.
  const tr = useCallback(
    (value) => (value && typeof value === 'object' && 'fr' in value ? value[lang] : value),
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, toggleLang, tr, t: ui[lang] }), [lang, toggleLang, tr])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
