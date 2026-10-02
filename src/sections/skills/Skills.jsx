import { skillDomains } from '../../data/skills.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { pad } from '../../utils/format.js'
import TechMarquee from './TechMarquee.jsx'

// Index typographique par domaine — pas de barres ni de pourcentages.
export default function Skills({ index }) {
  const { tr, t } = useLanguage()

  return (
    <section id="skills" className="py-28 md:py-40">
      <div className="container-page">
        <SectionHeader index={index} label={t.skills.label} title={t.skills.title} lead={t.skills.lead} />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillDomains.map((domain, i) => (
            <Reveal key={domain.id} delay={(i % 3) * 0.06} className="group relative bg-bg p-7 transition-colors duration-500 hover:bg-surface md:p-9">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-accent">{pad(i + 1)}</span>
                <span className="font-mono text-xs text-subtle">{domain.items.length}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-[0.06em]">{tr(domain.title)}</h3>
              <ul className="mt-6 space-y-2.5">
                {domain.items.map((item) => {
                  const label = tr(item)
                  return (
                    <li key={label} className="flex items-center gap-3 text-muted transition-colors duration-300 group-hover:text-fg">
                      <span aria-hidden="true" className="h-px w-3 bg-line-strong transition-all duration-300 group-hover:w-5 group-hover:bg-accent" />
                      {label}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <TechMarquee className="mt-24 md:mt-32" />
    </section>
  )
}
