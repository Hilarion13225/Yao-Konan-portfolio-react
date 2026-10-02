import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import TechBadge from '../../components/ui/TechBadge.jsx'
import { GithubIcon } from '../../components/ui/Icons.jsx'
import { pad } from '../../utils/format.js'

// Projet secondaire : Problem / Solution / Role / Technologies / Result / liens.
export default function ProjectRow({ project, index }) {
  const { tr, t } = useLanguage()
  const title = tr(project.title)

  return (
    <Reveal as="article" className="group relative grid gap-8 border-b border-line py-12 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <p className="eyebrow flex items-center gap-3">
          <span style={{ color: project.visual.accent }}>{pad(index)}</span>
          <span aria-hidden="true">/</span>
          <span>{tr(project.category)}</span>
        </p>
        <h4 className="mt-4 font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] font-semibold uppercase leading-none tracking-tight">
          <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-accent" data-cursor="view">
            {title}
          </Link>
        </h4>
        <p className="mt-3 text-sm text-muted">{tr(project.tagline)}</p>

        {project.visual.image && (
          <Link
            to={`/projects/${project.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            data-cursor="view"
            className="mt-6 block overflow-hidden rounded-xl border border-line"
          >
            <img
              src={project.visual.image}
              alt=""
              loading="lazy"
              decoding="async"
              width="1366"
              height="768"
              className="aspect-[16/9] w-full object-cover object-top opacity-80 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
            />
          </Link>
        )}
      </div>

      <dl className="grid gap-6 text-sm sm:grid-cols-2 md:col-span-8 md:gap-x-10">
        <div>
          <dt className="eyebrow">{t.projects.problem}</dt>
          <dd className="mt-2 text-muted">{tr(project.problem)}</dd>
        </div>
        <div>
          <dt className="eyebrow">{t.projects.solution}</dt>
          <dd className="mt-2 text-muted">{tr(project.solution)}</dd>
        </div>
        <div>
          <dt className="eyebrow">{t.projects.role}</dt>
          <dd className="mt-2">{tr(project.role)}</dd>
        </div>
        {project.result && (
          <div>
            <dt className="eyebrow">{t.projects.result}</dt>
            <dd className="mt-2">{tr(project.result)}</dd>
          </div>
        )}
        <div className="sm:col-span-2">
          <dt className="eyebrow">{t.projects.tech}</dt>
          <dd className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <TechBadge key={s}>{s}</TechBadge>
            ))}
          </dd>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 sm:col-span-2">
          <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 font-medium">
            <span className="link-underline">{t.projects.details}</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-fg">
              <span className="link-underline">{t.projects.view}</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-fg">
              <GithubIcon className="size-4" />
              <span className="link-underline">{t.projects.github}</span>
            </a>
          )}
        </div>
      </dl>
    </Reveal>
  )
}
