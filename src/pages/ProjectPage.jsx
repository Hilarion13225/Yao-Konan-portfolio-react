import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getProject, projects } from '../data/projects.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import AnimatedText from '../components/ui/AnimatedText.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import TechBadge from '../components/ui/TechBadge.jsx'
import { GithubIcon } from '../components/ui/Icons.jsx'
import ArchitectureDiagram from '../components/common/ArchitectureDiagram.jsx'
import ProjectVisual from '../sections/projects/ProjectVisual.jsx'
import { pad } from '../utils/format.js'
import NotFound from './NotFound.jsx'

// Bloc éditorial : libellé à gauche (collant), contenu à droite.
function Block({ label, index, children }) {
  return (
    <section className="grid gap-6 border-t border-line py-14 md:grid-cols-12 md:gap-10 md:py-20">
      <Reveal className="md:col-span-3">
        <h2 className="eyebrow flex items-center gap-3 md:sticky md:top-28">
          <span className="text-accent">{pad(index)}</span>
          <span aria-hidden="true" className="h-px w-5 bg-line-strong" />
          {label}
        </h2>
      </Reveal>
      <div className="md:col-span-9">{children}</div>
    </section>
  )
}

function List({ items }) {
  const { tr } = useLanguage()
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal as="li" key={i} delay={(i % 6) * 0.03} className="flex gap-4 border-b border-line py-4">
          <span className="font-mono text-xs text-subtle">{pad(i + 1)}</span>
          <span>{tr(item)}</span>
        </Reveal>
      ))}
    </ul>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  const { tr, t } = useLanguage()
  const p = t.project

  useDocumentMeta({
    title: project ? tr(project.title) : p.back,
    description: project ? tr(project.summary) : undefined,
    path: `/projects/${slug}`,
  })

  if (!project) return <NotFound />

  const position = projects.indexOf(project)
  const next = projects[(position + 1) % projects.length]
  const title = tr(project.title)
  const prose = 'max-w-3xl text-lg leading-relaxed text-muted md:text-xl'

  // Seuls les blocs renseignés sont affichés — aucune section vide ou inventée.
  const blocks = [
    project.context && { label: p.context, body: <Reveal as="p" className={prose}>{tr(project.context)}</Reveal> },
    project.problem && { label: p.problem, body: <Reveal as="p" className={`${prose} text-fg`}>{tr(project.problem)}</Reveal> },
    project.solution && { label: p.solution, body: <Reveal as="p" className={prose}>{tr(project.solution)}</Reveal> },
    project.architecture && { label: p.architecture, body: <ArchitectureDiagram architecture={project.architecture} accent={project.visual.accent} /> },
    project.features.length > 0 && { label: p.features, body: <List items={project.features} /> },
    {
      label: p.tech,
      body: (
        <Reveal as="ul" className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li key={s}>
              <TechBadge className="px-4 py-2 text-sm">{s}</TechBadge>
            </li>
          ))}
        </Reveal>
      ),
    },
    project.contribution.length > 0 && { label: p.contribution, body: <List items={project.contribution} /> },
    project.challenges.length > 0 && { label: p.challenges, body: <List items={project.challenges} /> },
    project.learnings.length > 0 && { label: p.learnings, body: <List items={project.learnings} /> },
    project.gallery.length > 0 && {
      label: p.gallery,
      body: (
        <div className="grid gap-6">
          {project.gallery.map((img) => (
            <Reveal as="figure" key={img.src}>
              <img
                src={img.src}
                alt={tr(img.alt)}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl border border-line"
              />
              <figcaption className="mt-3 font-mono text-xs text-subtle">{tr(img.alt)}</figcaption>
            </Reveal>
          ))}
        </div>
      ),
    },
    {
      label: p.links,
      body:
        project.links.live || project.links.github ? (
          <div className="flex flex-wrap gap-3">
            {project.links.live && (
              <Button href={project.links.live}>
                {t.projects.live} <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            )}
            {project.links.github && (
              <Button href={project.links.github} variant="ghost">
                <GithubIcon className="size-4" /> {t.projects.github}
              </Button>
            )}
          </div>
        ) : (
          <p className="text-muted">
            {p.noLinks}{' '}
            <Link to="/#contact" className="link-underline text-fg">
              {t.contact.cta} →
            </Link>
          </p>
        ),
    },
  ].filter(Boolean)

  return (
    <article className="pt-28 md:pt-36">
      <header className="container-page">
        <Reveal>
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft className="size-4" aria-hidden="true" /> {p.back}
          </Link>
        </Reveal>

        <p className="eyebrow mt-12 flex flex-wrap items-center gap-3">
          <span style={{ color: project.visual.accent }}>{pad(position + 1)}</span>
          <span aria-hidden="true">/</span>
          {tr(project.category)}
        </p>
        <AnimatedText
          as="h1"
          text={title}
          immediate
          className="mt-6 max-w-6xl font-display text-[clamp(2.6rem,1.2rem+6vw,7rem)] font-semibold uppercase leading-[0.9] tracking-[-0.035em]"
        />
        <Reveal as="p" delay={0.3} className="mt-8 max-w-2xl font-display text-xl text-fg/85 md:text-2xl">
          {tr(project.tagline)}
        </Reveal>

        <Reveal as="dl" delay={0.4} className="mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
          <div>
            <dt className="eyebrow">{p.role}</dt>
            <dd className="mt-2">{tr(project.role)}</dd>
          </div>
          {project.period && (
            <div>
              <dt className="eyebrow">{p.period}</dt>
              <dd className="mt-2">{tr(project.period)}</dd>
            </div>
          )}
          {project.result && (
            <div>
              <dt className="eyebrow">{p.result}</dt>
              <dd className="mt-2">{tr(project.result)}</dd>
            </div>
          )}
        </Reveal>
      </header>

      <Reveal delay={0.2} className="container-page mt-14 md:mt-20">
        <div className="group">
          <ProjectVisual project={project} eager className="aspect-[16/10] md:aspect-[16/8]" />
        </div>
      </Reveal>

      <div className="container-page mt-16 md:mt-24">
        {blocks.map((b, i) => (
          <Block key={b.label} label={b.label} index={i + 1}>
            {b.body}
          </Block>
        ))}
      </div>

      <nav aria-label={p.next} className="mt-16 border-t border-line">
        <Link to={`/projects/${next.slug}`} data-cursor="view" className="group container-page block py-20 md:py-28">
          <p className="eyebrow">{p.next}</p>
          <p className="mt-6 flex items-end justify-between gap-6 font-display text-[clamp(2.2rem,1rem+5vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            <span className="transition-colors duration-500 group-hover:text-accent">{tr(next.title)}</span>
            <ArrowUpRight className="size-[0.7em] shrink-0 text-muted transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-fg" aria-hidden="true" />
          </p>
        </Link>
      </nav>
    </article>
  )
}
