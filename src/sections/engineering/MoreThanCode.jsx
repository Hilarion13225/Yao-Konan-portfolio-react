import { principles } from '../../data/approach.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { pad } from '../../utils/format.js'

export default function MoreThanCode({ index }) {
  const { tr, t } = useLanguage()

  return (
    <section id="engineering" className="py-28 md:py-40">
      <div className="container-page">
        <SectionHeader index={index} label={t.principles.label} title={t.principles.title} lead={t.principles.lead} />

        <ul className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title.en ?? p.title}
              delay={(i % 4) * 0.05}
              className="group relative border-b border-r border-line p-7 transition-colors duration-500 hover:bg-surface md:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-cyan transition-transform duration-500 group-hover:scale-x-100"
              />
              <p className="font-mono text-xs text-subtle">{pad(i + 1)}</p>
              <h3 className="mt-8 font-display text-xl font-semibold">{tr(p.title)}</h3>
              <p className="mt-3 text-sm text-muted">{tr(p.text)}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
