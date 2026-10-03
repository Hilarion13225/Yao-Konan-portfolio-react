import { processSteps } from '../../data/approach.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { pad } from '../../utils/format.js'

// De l'idée au déploiement — la ligne se dessine au fil du scroll (CSS : .draw-on-scroll).
export default function HowIBuild({ index }) {
  const { tr, t } = useLanguage()

  return (
    <section id="process" className="border-t border-line bg-bg-elev/40 py-28 md:py-40">
      <div className="container-page">
        <SectionHeader index={index} label={t.process.label} title={t.process.title} lead={t.process.lead} />

        <ol className="draw-on-scroll relative grid gap-0 xl:grid-cols-7 xl:gap-4">
          {/* Rail : vertical sur mobile, horizontal en très grand écran */}
          <span aria-hidden="true" className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line xl:left-0 xl:top-[7px] xl:h-px xl:w-full" />
          <span
            aria-hidden="true"
            className="draw-y absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-accent to-cyan xl:hidden"
          />
          <span
            aria-hidden="true"
            className="draw-x absolute left-0 top-[7px] hidden h-px w-full origin-left bg-gradient-to-r from-accent to-cyan xl:block"
          />

          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.key} delay={i * 0.05} className="relative pb-10 pl-10 last:pb-0 xl:pb-0 xl:pl-0 xl:pt-10">
              <span aria-hidden="true" className="absolute left-0 top-0.5 size-[15px] rounded-full border border-line-strong bg-bg xl:top-0">
                <span className="absolute inset-[4px] rounded-full bg-accent" />
              </span>
              <p className="font-mono text-xs text-subtle">{pad(i + 1)}</p>
              <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-[0.04em]">{step.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">{tr(step.text)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
