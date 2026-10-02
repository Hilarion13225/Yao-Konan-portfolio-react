import { ArrowUpRight, Award } from 'lucide-react'
import { education } from '../../data/education.js'
import { awards, certificates } from '../../data/achievements.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import TimelineItem from '../../components/ui/TimelineItem.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { formatMonthYear } from '../../utils/format.js'

export default function Education({ index }) {
  const { lang, tr, t } = useLanguage()

  return (
    <section id="education" className="border-t border-line bg-bg-elev/40 py-28 md:py-40">
      <div className="container-page">
        <SectionHeader index={index} label={t.education.label} title={t.education.title} lead={t.education.lead} />

        <ol className="relative">
          <span aria-hidden="true" className="absolute bottom-2 left-0 top-2 w-px bg-line md:left-[25%]" />
          {education.map((ed) => (
            <TimelineItem
              key={ed.period.en}
              highlight={ed.current}
              aside={
                <>
                  <p className="font-mono text-xs text-subtle">{tr(ed.period)}</p>
                  {ed.current && (
                    <span className="mt-2 inline-flex rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-accent">
                      {t.education.current}
                    </span>
                  )}
                </>
              }
            >
              <h3 className="font-display text-2xl font-semibold leading-tight md:text-[1.75rem]">{tr(ed.degree)}</h3>
              {ed.program && <p className="mt-2 font-mono text-sm text-cyan">{ed.program}</p>}
              <p className="mt-2 text-muted">
                <span className="text-fg">{ed.school}</span> · {ed.place}
                {ed.honor && <> · {tr(ed.honor)}</>}
              </p>
              {ed.text && <p className="mt-4 max-w-2xl text-[0.95rem] text-muted">{tr(ed.text)}</p>}
            </TimelineItem>
          ))}
        </ol>

        <div className="mt-28 grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h3 className="eyebrow flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
              {t.education.awards}
            </h3>
            <ul className="mt-6 space-y-4">
              {awards.map((a) => (
                <li key={a.title.en} className="flex gap-4 rounded-2xl border border-line bg-surface p-5">
                  <Award className="mt-0.5 size-5 shrink-0 text-cyan" aria-hidden="true" />
                  <div>
                    <p className="font-display text-lg font-semibold leading-snug">{tr(a.title)}</p>
                    <p className="mt-1 text-sm text-muted">{a.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h3 className="eyebrow flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
              {t.education.certificates}
            </h3>
            <ul className="mt-6 border-t border-line">
              {certificates.map((c) => (
                <li key={c.url}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid gap-1 border-b border-line py-5 transition-colors sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                  >
                    <span>
                      <span className="block font-medium transition-colors group-hover:text-accent">{c.title}</span>
                      <span className="mt-1 block text-sm text-subtle">{c.issuer}</span>
                    </span>
                    <span className="flex items-center gap-4 font-mono text-xs text-muted">
                      {formatMonthYear(c.dateISO, lang)}
                      <span className="inline-flex items-center gap-1 text-fg">
                        {t.education.verify}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
