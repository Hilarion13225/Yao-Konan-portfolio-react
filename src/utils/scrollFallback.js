// Repli pour les navigateurs sans `animation-timeline` (Firefox, anciens Safari / Chrome).
// Les navigateurs récents utilisent les animations CSS pilotées par le scroll et
// n'exécutent rien d'ici. Sinon, un unique écouteur de scroll (limité à une
// exécution par frame) met à jour des variables CSS lues par styles/index.css :
//   --scroll-progress sur <html>      → barre de progression
//   --draw-progress sur .draw-on-scroll → ligne de « How I build »

const clamp = (v) => Math.min(1, Math.max(0, v))

export function supportsScrollTimeline() {
  return typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('animation-timeline: scroll()')
}

export function initScrollFallback() {
  if (supportsScrollTimeline()) return

  const root = document.documentElement
  root.classList.add('no-sdt')

  let ticking = false
  const update = () => {
    ticking = false
    const vh = window.innerHeight
    const max = root.scrollHeight - vh
    root.style.setProperty('--scroll-progress', max > 0 ? clamp(window.scrollY / max).toFixed(4) : '0')

    // Même plage que la version CSS (entry 20% → exit 40%), exprimée en position du haut de l'élément :
    // début quand 20 % de l'élément est entré par le bas, fin quand 40 % est sorti par le haut.
    document.querySelectorAll('.draw-on-scroll').forEach((el) => {
      const { top, height } = el.getBoundingClientRect()
      const start = vh - height * 0.2
      const end = -height * 0.4
      el.style.setProperty('--draw-progress', clamp((start - top) / (start - end)).toFixed(4))
    })
  }
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(update)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  // Les sections changent avec la navigation (React Router) : on recalcule après chaque rendu.
  new MutationObserver(onScroll).observe(document.getElementById('root'), { childList: true, subtree: true })
  onScroll()
}
