import { useRef } from 'react'
import { useInViewOnce } from '../../hooks/useInViewOnce.js'
import { cn } from '../../utils/cn.js'

// Apparition douce au scroll, en CSS (voir .reveal dans styles/index.css).
export default function Reveal({ as: Tag = 'div', delay = 0, y = 24, className, style, children, ...props }) {
  const ref = useRef(null)
  const visible = useInViewOnce(ref)
  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ '--reveal-delay': `${delay}s`, '--reveal-y': `${y}px`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}
