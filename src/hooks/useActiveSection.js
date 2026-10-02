import { useEffect, useState } from 'react'

// Renvoie l'id de la section au centre de l'écran, ou '' si cette section
// ne fait pas partie de `ids` (ex. « How I build », absente du menu).
export function useActiveSection(ids, enabled = true) {
  const [current, setCurrent] = useState('')

  useEffect(() => {
    if (!enabled) {
      setCurrent('')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [enabled])

  return ids.includes(current) ? current : ''
}
