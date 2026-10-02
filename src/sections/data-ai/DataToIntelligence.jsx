import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { dataDomains, dataPipeline } from '../../data/approach.js'
import { getProject } from '../../data/projects.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { pad } from '../../utils/format.js'
import { cn } from '../../utils/cn.js'

// Pipeline interactif : avance seul tant que le visiteur n'a pas interagi.
export default function DataToIntelligence({ index }) {
  const { tr, t } = useLanguage()
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-20% 0px' })
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto || reduce || !inView) return
    const id = setInterval(() => setActive((i) => (i + 1) % dataPipeline.length), 2800)
    return () => clearInterval(id)
  }, [auto, reduce, inView])

  const select = (i) => {
    setAuto(false)
    setActive(i)
  }
  const step = dataPipeline[active]
  const seen = step.seen ? getProject(step.seen) : null

  return (
    <section id="data-ai" className="relative isolate overflow-hidden border-t border-line py-28 md:py-40">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-[radial-gradient(60%_60%_at_50%_0%,var(--glow),transparent_70%)]" />
      <div className="container-page">
        <SectionHeader index={index} label={t.dataAi.label} title={t.dataAi.title} lead={t.dataAi.lead} />

        <div ref={ref} className="rounded-3xl border border-line bg-surface/60 p-5 backdrop-blur-sm sm:p-8 md:p-12">
          <p className="eyebrow mb-6">{t.dataAi.hint}</p>

          {/* Étapes */}
          <div role="tablist" aria-label={t.dataAi.title} className="relative grid grid-cols-4 gap-y-6 sm:grid-cols-7">
            <span aria-hidden="true" className="absolute left-[7%] right-[7%] top-[19px] hidden h-px bg-line sm:block" />
            <motion.span
              aria-hidden="true"
              className="absolute left-[7%] top-[19px] hidden h-px bg-gradient-to-r from-accent to-cyan sm:block"
              animate={{ width: `${(active / (dataPipeline.length - 1)) * 86}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {dataPipeline.map((s, i) => {
              const isActive = i === active
              const done = i < active
              return (
                <button
                  key={s.key}
                  role="tab"
                  type="button"
                  id={`dp-tab-${s.key}`}
                  aria-selected={isActive}
                  aria-controls="dp-panel"
                  onClick={() => select(i)}
                  onMouseEnter={() => select(i)}
                  className="group relative z-10 flex flex-col items-center gap-3"
                >
                  <span
                    className={cn(
                      'grid size-10 place-items-center rounded-full border font-mono text-[0.7rem] transition-all duration-300',
                      isActive
                        ? 'border-accent bg-accent text-white shadow-[0_0_0_6px_var(--glow)]'
                        : done
                          ? 'border-accent/60 bg-bg text-fg'
                          : 'border-line-strong bg-bg text-subtle group-hover:border-fg/50',
                    )}
                  >
                    {pad(i + 1)}
                  </span>
                  <span className={cn('font-display text-sm font-semibold uppercase tracking-[0.08em] transition-colors', isActive ? 'text-fg' : 'text-muted')}>
                    {s.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Détail de l'étape */}
          <div id="dp-panel" role="tabpanel" aria-labelledby={`dp-tab-${step.key}`} aria-live="polite" className="mt-10 min-h-[9rem] border-t border-line pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-12"
              >
                <p className="font-display text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-semibold uppercase leading-none md:col-span-4">
                  {step.title}
                </p>
                <p className="text-lg text-muted md:col-span-5">{tr(step.text)}</p>
                <div className="md:col-span-3">
                  <p className="eyebrow mb-2">{t.dataAi.seen}</p>
                  {seen ? (
                    <Link to={`/projects/${seen.slug}`} className="inline-flex items-center gap-1.5 text-fg">
                      <span className="link-underline">{tr(seen.title)}</span>
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <p className="text-sm text-subtle">{t.dataAi.notYet}</p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Domaines : pratiqué vs en apprentissage */}
        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {dataDomains.map((d, i) => (
            <Reveal as="li" key={d.title} delay={(i % 3) * 0.05} className="flex items-center justify-between gap-4 bg-bg p-6">
              <div>
                <p className="font-display text-lg font-semibold">{d.title}</p>
                {d.note && <p className="mt-1 font-mono text-xs text-subtle">{d.note}</p>}
              </div>
              <span
                className={cn(
                  'shrink-0 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider',
                  d.status === 'practiced' ? 'border-accent/40 text-accent' : 'border-line-strong text-muted',
                )}
              >
                {d.status === 'practiced' ? t.dataAi.practiced : t.dataAi.learning}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
