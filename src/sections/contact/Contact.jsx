import { lazy, Suspense } from 'react'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { site, socials } from '../../config/site.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import AnimatedText from '../../components/ui/AnimatedText.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import Button from '../../components/ui/Button.jsx'
import { SocialIcon } from '../../components/ui/SocialLink.jsx'
import { pad } from '../../utils/format.js'

// Formulaire (react-hook-form + zod) chargé à la demande : il est en bas de page.
const ContactForm = lazy(() => import('./ContactForm.jsx'))

export default function Contact({ index }) {
  const { tr, t } = useLanguage()
  const c = t.contact

  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-line pb-24 pt-28 md:pb-32 md:pt-40">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[80%] bg-[radial-gradient(70%_60%_at_20%_100%,var(--glow),transparent_70%)]" />
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,#000_40%,transparent)]" />

      <div className="container-page">
        <Reveal as="p" className="eyebrow flex items-center gap-3">
          <span className="text-accent">{pad(index)}</span>
          <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
          {c.label}
        </Reveal>

        <AnimatedText
          as="h2"
          text={c.title}
          className="mt-8 max-w-5xl font-display text-[clamp(2.6rem,1.2rem+6vw,7rem)] font-semibold leading-[0.95] tracking-[-0.035em]"
        />
        <Reveal as="p" delay={0.15} className="mt-8 max-w-xl text-lg text-muted">
          {c.lead}
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <Button href={`mailto:${site.email}`} variant="primary" className="h-14 px-8 text-base">
            {c.cta} <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
        </Reveal>

        <div className="mt-24 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <ul className="space-y-7">
              {socials.map((s) => (
                <li key={s.key} className="border-b border-line pb-5">
                  <p className="eyebrow">{s.label}</p>
                  <a
                    href={s.href}
                    {...(!s.href.startsWith('mailto:') && { target: '_blank', rel: 'noreferrer' })}
                    className="mt-2 flex items-center justify-between gap-3 break-all text-fg"
                  >
                    <span className="link-underline">{s.handle}</span>
                    <SocialIcon name={s.key} className="text-muted" />
                  </a>
                </li>
              ))}
              <li className="border-b border-line pb-5">
                <p className="eyebrow">{c.phone}</p>
                <p className="mt-2 flex items-start justify-between gap-3">
                  <span>
                    {site.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="link-underline block w-fit">
                        {p}
                      </a>
                    ))}
                  </span>
                  <Phone className="size-4 shrink-0 text-muted" aria-hidden="true" />
                </p>
              </li>
              <li>
                <p className="eyebrow">{c.location}</p>
                <p className="mt-2 flex items-center justify-between gap-3">
                  {tr(site.location)}
                  <MapPin className="size-4 shrink-0 text-muted" aria-hidden="true" />
                </p>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="rounded-3xl border border-line bg-surface/90 p-6 sm:p-10">
              <Suspense fallback={<div className="min-h-[26rem]" />}>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
