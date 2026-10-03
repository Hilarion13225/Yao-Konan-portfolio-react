import { useEffect, useState } from 'react'

// Un seul IntersectionObserver partagé par tous les éléments animés au scroll :
// beaucoup moins coûteux qu'un observateur (ou un composant animé) par élément.
const callbacks = new WeakMap()
let observer = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        callbacks.get(entry.target)?.()
        observer.unobserve(entry.target)
        callbacks.delete(entry.target)
      })
    },
    { rootMargin: '0px 0px -10% 0px' },
  )
  return observer
}

// Renvoie true dès que l'élément entre dans l'écran (une seule fois).
export function useInViewOnce(ref, immediate = false) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      // une frame d'attente pour que la transition CSS se déclenche
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }
    const el = ref.current
    if (!el) return
    const obs = getObserver()
    callbacks.set(el, () => setVisible(true))
    obs.observe(el)
    return () => {
      obs.unobserve(el)
      callbacks.delete(el)
    }
  }, [ref, immediate])

  return visible
}
