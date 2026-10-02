import { experienced, exploring } from '../../data/skills.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

// Distinction nette entre ce qui est pratiqué et ce qui est en cours d'apprentissage.
export default function CurrentlyExploring({ index }) {
  const { tr, t } = useLanguage()
  const e = t.exploring

  return (
    <section id="exploring" className="border-t border-line py-28 md:py-40">
      <div className="container-page">
        <SectionHeader index={index} label={e.label} title={e.title} lead={e.lead} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold uppercase tracking-[0.06em]">{e.experienced}</h3>
            </div>
            <p className="mt-2 text-sm text-subtle">{e.experiencedLead}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {experienced.map((s) => (
                <li key={s} className="rounded-full border border-accent/30 bg-accent/[0.06] px-3.5 py-1.5 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full border border-dashed border-cyan" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold uppercase tracking-[0.06em]">{e.exploringTag}</h3>
            </div>
            <p className="mt-2 text-sm text-subtle">{e.exploringLead}</p>
            <ul className="mt-6 border-t border-dashed border-line-strong">
              {exploring.map((x) => (
                <li key={x.title} className="grid gap-1 border-b border-dashed border-line-strong py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <span className="font-display text-lg font-medium">{x.title}</span>
                  <span className="text-sm text-muted">{tr(x.text)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
