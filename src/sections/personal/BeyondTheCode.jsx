import { interests } from '../../data/interests.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

// Affichée uniquement si des centres d'intérêt sont renseignés dans data/interests.js.
export default function BeyondTheCode({ index }) {
  const { tr, t } = useLanguage()
  if (interests.length === 0) return null

  return (
    <section id="personal" className="border-t border-line py-28 md:py-36">
      <div className="container-page">
        <SectionHeader index={index} label={t.personal.label} title={t.personal.title} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((it, i) => (
            <Reveal as="li" key={tr(it.title)} delay={i * 0.05} className="border-t border-line pt-5">
              <p className="font-display text-xl font-semibold">{tr(it.title)}</p>
              {it.text && <p className="mt-2 text-sm text-muted">{tr(it.text)}</p>}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
