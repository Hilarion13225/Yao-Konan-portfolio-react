import { cn } from '../../utils/cn.js'

export default function TechBadge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[0.72rem] leading-none text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
