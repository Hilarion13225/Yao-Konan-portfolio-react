import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import AnimatedText from '../../components/ui/AnimatedText.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import { pad } from '../../utils/format.js'
import { cn } from '../../utils/cn.js'

// Grande composition éditoriale asymétrique — l'image alterne de côté.
export default function FeaturedProject({ project, index, flip = false }) {
  const { tr, t } = useLanguage()
  const title = tr(project.title)
  const href = `/projects/${project.slug}`

  return (
    <article className="group grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-16">
      <Reveal className={cn('md:col-span-7', flip && 'md:order-2 md:col-start-6')}>
        <Link to={href} data-cursor="view" aria-label={`${t.projects.explore} — ${title}`} className="block">
          <ProjectVisual project={project} className="aspect-[16/11] md:aspect-[16/12]" />
        </Link>
      </Reveal>

      <div className={cn('md:col-span-5', flip && 'md:order-1')}>
        <Reveal as="p" className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-project" style={{ '--p-accent': project.visual.accent }}>{pad(index)}</span>
          <span aria-hidden="true">/</span>
          <span>{tr(project.category)}</span>
        </Reveal>

        <AnimatedText
          as="h3"
          text={title}
          className="mt-5 font-display text-[clamp(2rem,1.2rem+3vw,3.6rem)] font-semibold uppercase leading-[0.95] tracking-tight"
        />
        <Reveal as="p" delay={0.1} className="mt-4 font-display text-lg text-fg/85 md:text-xl">
          {tr(project.tagline)}
        </Reveal>
        <Reveal as="p" delay={0.15} className="mt-5 text-muted">
          {tr(project.summary)}
        </Reveal>

        <Reveal as="dl" delay={0.2} className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
          <div className="grid grid-cols-[7.5rem_1fr] gap-4">
            <dt className="eyebrow pt-0.5">{t.projects.role}</dt>
            <dd>{tr(project.role)}</dd>
          </div>
          <div className="grid grid-cols-[7.5rem_1fr] gap-4">
            <dt className="eyebrow pt-0.5">{t.projects.tech}</dt>
            <dd className="text-muted">{project.stack.join(' · ')}</dd>
          </div>
          {project.result && (
            <div className="grid grid-cols-[7.5rem_1fr] gap-4">
              <dt className="eyebrow pt-0.5">{t.projects.result}</dt>
              <dd className="text-fg">{tr(project.result)}</dd>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.25} className="mt-8">
          <Link to={href} className="inline-flex items-center gap-2 font-medium text-fg" data-cursor="hover">
            <span className="link-underline">{t.projects.explore}</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </article>
  )
}
