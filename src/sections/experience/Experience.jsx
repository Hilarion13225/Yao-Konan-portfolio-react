import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { experiences } from '../../data/experience.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import TimelineItem from '../../components/ui/TimelineItem.jsx'
import TechBadge from '../../components/ui/TechBadge.jsx'

export default function Experience({ index }) {
  const { tr, t } = useLanguage()

  return (
    <section id="experience" className="border-t border-line py-28 md:py-40">
      <div className="container-page">
        <SectionHeader index={index} label={t.experience.label} title={t.experience.title} lead={t.experience.lead} />

        <ol className="relative">
          <span aria-hidden="true" className="absolute bottom-2 left-0 top-2 w-px bg-line md:left-[25%]" />
          {experiences.map((exp, i) => (
            <TimelineItem
              key={`${exp.org}-${i}`}
              highlight={i === 0}
              aside={
                <>
                  <p className="font-display text-3xl font-semibold leading-none md:text-4xl">{exp.year}</p>
                  {tr(exp.period) !== exp.year && <p className="mt-2 font-mono text-xs text-subtle">{tr(exp.period)}</p>}
                </>
              }
            >
              <h3 className="font-display text-2xl font-semibold leading-tight">{tr(exp.role)}</h3>
              <p className="mt-1 text-muted">
                <span className="text-fg">{exp.org}</span> · {exp.place}
              </p>
              {exp.orgFull && <p className="mt-0.5 text-xs text-subtle">{exp.orgFull}</p>}
              <ul className="mt-5 max-w-2xl space-y-2 text-[0.95rem] text-muted">
                {exp.points.map((p, j) => (
                  <li key={j} className="relative pl-5">
                    <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2.5 bg-line-strong" />
                    {tr(p)}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {exp.stack.map((s) => (
                  <TechBadge key={tr(s)}>{tr(s)}</TechBadge>
                ))}
                {exp.project && (
                  <Link to={`/projects/${exp.project}`} className="ml-2 inline-flex items-center gap-1 text-sm text-fg">
                    <span className="link-underline">{t.experience.caseStudy}</span>
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </TimelineItem>
          ))}
        </ol>
      </div>
    </section>
  )
}
