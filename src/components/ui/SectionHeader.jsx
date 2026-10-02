import AnimatedText from './AnimatedText.jsx'
import Reveal from './Reveal.jsx'
import { pad } from '../../utils/format.js'
import { cn } from '../../utils/cn.js'

export default function SectionHeader({ index, label, title, lead, className, titleClassName }) {
  return (
    <header className={cn('mb-14 grid gap-6 md:mb-20 md:grid-cols-12', className)}>
      <Reveal className="md:col-span-3">
        <p className="eyebrow flex items-center gap-3">
          {index != null && <span className="text-accent">{pad(index)}</span>}
          <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
          <span>{label}</span>
        </p>
      </Reveal>
      <div className="md:col-span-9">
        <AnimatedText
          text={title}
          className={cn('font-display text-[clamp(2.1rem,1.2rem+3.6vw,4.25rem)] font-semibold', titleClassName)}
        />
        {lead && (
          <Reveal as="p" delay={0.15} className="mt-6 max-w-2xl text-base text-muted md:text-lg">
            {lead}
          </Reveal>
        )}
      </div>
    </header>
  )
}
