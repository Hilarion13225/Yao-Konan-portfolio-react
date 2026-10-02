import { motion } from 'framer-motion'
import { cn } from '../../utils/cn.js'

const EASE = [0.22, 1, 0.36, 1]

// Révèle un texte mot par mot, chaque mot glissant hors d'un masque.
// Le texte complet reste lisible par les lecteurs d'écran via aria-label.
export default function AnimatedText({ text, as = 'h2', className, wordClassName, delay = 0, stagger = 0.045, immediate = false }) {
  const Tag = motion[as] ?? motion.h2
  const words = text.split(' ')
  const trigger = immediate
    ? { initial: 'hidden', animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '0px 0px -10% 0px' } }

  return (
    <Tag
      className={className}
      aria-label={text}
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className={cn('inline-block will-change-transform', wordClassName)}
            variants={{ hidden: { y: '110%' }, visible: { y: 0, transition: { duration: 0.9, ease: EASE } } }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  )
}
