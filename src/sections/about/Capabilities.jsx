import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'
import { capabilities } from '../../data/skills.js'
import { getProject } from '../../data/projects.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import TechBadge from '../../components/ui/TechBadge.jsx'
import { pad } from '../../utils/format.js'
import { cn } from '../../utils/cn.js'

// « What I build » — liste éditoriale en accordéon : un axe ouvert à la fois.
export default function Capabilities({ index }) {
  const { tr, t } = useLanguage()
  const [open, setOpen] = useState(capabilities[0].id)

  return (
    <section id="capabilities" className="border-t border-line bg-bg-elev/40">
      <div className="container-page py-28 md:py-40">
        <SectionHeader index={index} label={t.capabilities.label} title={t.capabilities.title} lead={t.capabilities.lead} />

        <ul className="border-t border-line">
          {capabilities.map((cap, i) => {
            const isOpen = open === cap.id
            const panelId = `cap-${cap.id}`
            return (
              <Reveal as="li" key={cap.id} delay={i * 0.05} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : cap.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-7 text-left md:gap-10 md:py-9"
                  >
                    <span className="font-mono text-sm text-subtle">{pad(i + 1)}</span>
                    <span
                      className={cn(
                        'font-display text-[clamp(1.6rem,1rem+2.6vw,3.25rem)] font-medium leading-none tracking-tight transition-colors duration-300',
                        isOpen ? 'text-fg' : 'text-muted group-hover:text-fg',
                      )}
                    >
                      {tr(cap.title)}
                    </span>
                    <span className={cn('grid size-10 place-items-center rounded-full border transition-all duration-300', isOpen ? 'rotate-45 border-accent text-accent' : 'border-line-strong text-muted')}>
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 md:grid-cols-12 md:pl-[calc(2rem+2.5rem)]">
                        <p className="text-base text-muted md:col-span-5 md:text-lg">{tr(cap.text)}</p>
                        <div className="md:col-span-4">
                          <ul className="flex flex-wrap gap-2">
                            {cap.stack.map((s) => (
                              <li key={tr(s)}>
                                <TechBadge>{tr(s)}</TechBadge>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="md:col-span-3">
                          <p className="eyebrow mb-3">{t.capabilities.proof}</p>
                          <ul className="space-y-1.5">
                            {cap.proof.map((slug) => {
                              const p = getProject(slug)
                              return (
                                <li key={slug}>
                                  <Link to={`/projects/${slug}`} className="link-underline text-sm text-fg">
                                    {tr(p.title)}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
