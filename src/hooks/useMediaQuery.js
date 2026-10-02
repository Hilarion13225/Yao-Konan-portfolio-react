import { useSyncExternalStore } from 'react'

export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

// Souris + survol réel : active le curseur et les effets magnétiques
export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)')
