import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <Reveal as="span" className="eyebrow">Réalisations</Reveal>
        <Reveal as="h2" className="section-title">Projets</Reveal>
        <Reveal as="p" className="section-lead">
          Une sélection de projets entre développement web et intelligence artificielle.
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={i} className="project-card">
              {project.thumb && (
                <div className="project-thumb">
                  <img src={project.thumb} alt={project.title} />
                </div>
              )}
              <div className="project-body">
                <span className="project-role">
                  Rôle : <span className="role-badge">{project.role}</span>
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  Launch <i className="fas fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </Reveal>
          ))}

          <Reveal className="project-card placeholder">
            <div className="project-body">
              <i className="fas fa-plus"></i>
              <h3>Prochain projet</h3>
              <p>D'autres projets arrivent bientôt, au fil de ma formation en Big Data & IA.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
