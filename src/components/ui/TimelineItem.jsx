import Reveal from './Reveal.jsx'
import { cn } from '../../utils/cn.js'

// Ligne de timeline : colonne gauche (période), point, contenu.
export default function TimelineItem({ aside, highlight = false, children, className }) {
  return (
    <Reveal as="li" className={cn('relative grid gap-3 pb-14 pl-8 last:pb-0 md:grid-cols-12 md:gap-x-0 md:pl-0', className)}>
      <div className="md:col-span-3 md:pr-8 md:text-right">{aside}</div>
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-1.5 size-[9px] -translate-x-1/2 rounded-full border md:left-[25%]',
          highlight ? 'border-accent bg-accent shadow-[0_0_0_5px_var(--glow)]' : 'border-line-strong bg-bg',
        )}
      />
      <div className="md:col-span-9 md:pl-10">{children}</div>
    </Reveal>
  )
}
