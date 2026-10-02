import { featuredProjects, otherProjects } from '../../data/projects.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SectionHeader from '../../components/ui/SectionHeader.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import FeaturedProject from './FeaturedProject.jsx'
import ProjectRow from './ProjectRow.jsx'

export default function SelectedWork({ index }) {
  const { t } = useLanguage()

  return (
    <section id="projects" className="border-t border-line py-28 md:py-40">
      <div className="container-page">
        <SectionHeader index={index} label={t.projects.label} title={t.projects.title} lead={t.projects.lead} titleClassName="uppercase" />

        <div className="space-y-28 md:space-y-40">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i + 1} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-32 md:mt-44">
          <Reveal as="h3" className="eyebrow flex items-center gap-3 border-b border-line pb-6">
            <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
            {t.projects.more}
          </Reveal>
          {otherProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={featuredProjects.length + i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
