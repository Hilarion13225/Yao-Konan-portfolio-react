import { useRef } from 'react'
import { useInViewOnce } from '../../hooks/useInViewOnce.js'
import { cn } from '../../utils/cn.js'

// Révèle un texte mot par mot, chaque mot glissant hors d'un masque (CSS : .split-word).
// Le texte complet reste lisible par les lecteurs d'écran via aria-label.
export default function AnimatedText({ text, as: Tag = 'h2', className, wordClassName, delay = 0, stagger = 0.045, immediate = false }) {
  const ref = useRef(null)
  const visible = useInViewOnce(ref, immediate)
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={cn(visible && 'is-visible', className)} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true" className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span className={cn('split-word', wordClassName)} style={{ '--word-delay': `${delay + i * stagger}s` }}>
            {word}
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}
