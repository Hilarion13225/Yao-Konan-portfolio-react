import { ArrowUpRight } from 'lucide-react'
import { socials } from '../../config/site.js'
import { projects } from '../../data/projects.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import AnimatedText from '../../components/ui/AnimatedText.jsx'
import { GithubIcon } from '../../components/ui/Icons.jsx'
import { pad } from '../../utils/format.js'

const github = socials.find((s) => s.key === 'github')
const deployed = projects.filter((p) => p.links.live)

// Présentation sobre du GitHub — aucune statistique affichée (rien d'inventé).
export default function CodeLivesHere({ index }) {
  const { tr, t } = useLanguage()

  return (
    <section id="github" className="border-t border-line py-28 md:py-36">
      <div className="container-page grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end [&>*]:min-w-0">
        <div className="md:col-span-7">
          <Reveal as="p" className="eyebrow flex items-center gap-3">
            <span className="text-accent">{pad(index)}</span>
            <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
            {t.github.label}
          </Reveal>
          <AnimatedText text={t.github.title} className="mt-6 font-display text-[clamp(2.4rem,1.4rem+4vw,5rem)] font-semibold" />
          <Reveal as="p" delay={0.1} className="mt-5 max-w-lg text-muted md:text-lg">
            {t.github.lead}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-5">
          <a
            href={github.href}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="group block rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-line-strong"
          >
            <div className="flex items-center justify-between">
              <GithubIcon className="size-7" />
              <ArrowUpRight className="size-5 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fg" aria-hidden="true" />
            </div>
            <p className="mt-10 font-mono text-sm text-muted">github.com/</p>
            <p className="font-display text-2xl font-semibold">{github.handle}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-fg">
              <span className="link-underline">{t.github.cta}</span>
            </p>
          </a>
          {deployed.length > 0 && (
            <ul className="mt-4 divide-y divide-line rounded-2xl border border-line">
              {deployed.map((p) => (
                <li key={p.slug}>
                  <a href={p.links.live} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 px-5 py-3 text-sm">
                    <span className="truncate">{tr(p.title)}</span>
                    <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-subtle group-hover:text-fg">
                      {new URL(p.links.live).host}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  )
}
