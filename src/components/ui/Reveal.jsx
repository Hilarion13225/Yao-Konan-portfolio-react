import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Apparition douce au scroll (désactivée automatiquement en reduced motion via MotionConfig).
export default function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...props }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...props}
    >
      {children}
    </Tag>
  )
}
