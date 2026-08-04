import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Nombre de projets visibles avant de cliquer sur "Voir plus"
const VISIBLE_COUNT = 3

export default function Projects() {
  const { lang, t } = useLanguage()
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT)
  const hasMore = projects.length > VISIBLE_COUNT

  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <Reveal as="span" className="eyebrow">{t.projects.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title">{t.projects.title}</Reveal>
        <Reveal as="p" className="section-lead">
          {t.projects.lead}
        </Reveal>
        <div className="projects-grid">
          {visibleProjects.map((project, i) => (
            <Reveal key={i} className="project-card">
              {project.thumb && (
                <div className="project-thumb">
                  <img src={project.thumb} alt={project.title[lang]} />
                </div>
              )}
              <div className="project-body">
                <span className="project-role">
                  {t.projects.role} <span className="role-badge">{project.role[lang]}</span>
                </span>
                <h3>{project.title[lang]}</h3>
                <p>{project.description[lang]}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  {t.projects.launch} <i className="fas fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </Reveal>
          ))}

          {(!hasMore || showAll) && (
            <Reveal className="project-card placeholder">
              <div className="project-body">
                <i className="fas fa-plus"></i>
                <h3>{t.projects.nextTitle}</h3>
                <p>{t.projects.nextText}</p>
              </div>
            </Reveal>
          )}
        </div>

        {hasMore && (
          <div className="projects-toggle">
            <button
              type="button"
              className={`projects-toggle-btn ${showAll ? 'is-open' : ''}`}
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
            >
              <span>{showAll ? t.projects.showLess : t.projects.showMore}</span>
              <span className="projects-toggle-icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}