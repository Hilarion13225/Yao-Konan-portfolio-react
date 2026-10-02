import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Remonte en haut à chaque changement de page et gère les ancres (/#projects).
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      // attendre que la page cible soit rendue (pages chargées à la demande)
      let tries = 0
      const tick = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ block: 'start' })
        else if (tries++ < 20) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  return null
}
