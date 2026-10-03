import { useEffect } from 'react'
import { site } from '../config/site.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Met à jour le titre, la description, la langue et l'URL canonique de la page courante.
export function useDocumentMeta({ title, description, path = '/' }) {
  const { lang, tr } = useLanguage()

  useEffect(() => {
    document.title = title ? `${title} — Yao Konan` : tr(site.title)
    const url = `${site.url}${path}`
    const set = (selector, attr, value) => {
      if (value) document.querySelector(selector)?.setAttribute(attr, value)
    }
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', document.title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', url)
    set('meta[property="og:locale"]', 'content', lang === 'fr' ? 'fr_FR' : 'en_US')
    set('link[rel="canonical"]', 'href', url)
  }, [title, description, path, lang, tr])
}
