import { Download } from 'lucide-react'
import { site } from '../../config/site.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import Button from '../../components/ui/Button.jsx'

export default function About({ index }) {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="container-page py-28 md:py-40">
      <SectionHeader index={index} label={a.label} title={a.title} />

      <div className="grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-4 md:col-start-1">
          <figure className="group relative mx-auto max-w-sm md:sticky md:top-28">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
              <img
                src={site.photo}
                alt={a.photoAlt}
                width="492"
                height="507"
                loading="lazy"
                decoding="async"
                className="aspect-[492/507] w-full object-cover grayscale-[0.85] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-4 flex items-center justify-between font-mono text-xs text-subtle">
              <span>{site.fullName}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6">
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-muted md:text-lg">
            {a.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.08} className={i === 0 ? 'text-fg' : undefined}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal as="dl" delay={0.1} className="mt-14 grid grid-cols-1 border-t border-line xs:grid-cols-2">
            {a.facts.map((f) => (
              <div key={f.k} className="border-b border-line py-5 xs:odd:pr-6 xs:even:border-l xs:even:pl-6">
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-2 font-display text-lg font-medium">{f.v}</dd>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <Button href={site.cv} variant="ghost" download>
              {a.cv} <Download className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
