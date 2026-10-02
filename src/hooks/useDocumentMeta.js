import { useEffect } from 'react'
import { site } from '../config/site.js'

// Met à jour le titre, la description et l'URL canonique de la page courante.
export function useDocumentMeta({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = title ? `${title} — Yao Konan` : site.title
    const url = `${site.url}${path}`
    const set = (selector, attr, value) => {
      if (value) document.querySelector(selector)?.setAttribute(attr, value)
    }
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', document.title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', url)
    set('link[rel="canonical"]', 'href', url)
  }, [title, description, path])
}
