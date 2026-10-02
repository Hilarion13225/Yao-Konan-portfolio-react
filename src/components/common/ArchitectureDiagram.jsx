import { Fragment } from 'react'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Reveal from '../ui/Reveal.jsx'
import { pad } from '../../utils/format.js'
import { cn } from '../../utils/cn.js'

// Diagramme d'architecture : couches empilées (type 'layers') ou étapes d'un flux (type 'flow').
export default function ArchitectureDiagram({ architecture, accent }) {
  const { tr } = useLanguage()
  const layers = architecture.layers

  return (
    <div
      className="flex max-w-3xl flex-col items-stretch gap-2"
      style={{ '--p-accent': accent }}
    >
      {layers.map((layer, i) => (
        <Fragment key={i}>
          <Reveal
            delay={i * 0.06}
            className={cn(
              'relative rounded-xl border border-line bg-surface p-5 sm:flex sm:items-center sm:justify-between sm:gap-6',
              (i === 0 || i === layers.length - 1) && 'border-[color-mix(in_srgb,var(--p-accent)_45%,var(--line))]',
            )}
          >
            <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-subtle">
              <span style={{ color: accent }}>{pad(i + 1)}</span>
              {tr(layer.label)}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-0 sm:justify-end">
              {layer.items.map((item) => (
                <li key={tr(item)} className="rounded-md bg-surface-2 px-2.5 py-1 text-sm">
                  {tr(item)}
                </li>
              ))}
            </ul>
          </Reveal>
          {i < layers.length - 1 && (
            <span aria-hidden="true" className="grid place-items-center text-subtle">
              <ArrowDown className="size-4" />
            </span>
          )}
        </Fragment>
      ))}
    </div>
  )
}
