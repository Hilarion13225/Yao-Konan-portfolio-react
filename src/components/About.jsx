import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="span" className="eyebrow">
          À propos
        </Reveal>
        <Reveal as="h2" className="section-title">
          Qui suis-je ?
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-photo">
              <img src={profile.photo} alt={profile.name} />
              <div className="badge-float">
                <strong>1er</strong>
                <span>Hackathon 2025</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="about-text">
            <p>
              Je m'appelle <strong>{profile.fullName}</strong>. Je suis étudiant en Master 1 Big Data et
              Intelligence Artificielle (BIHAR) à l'ESATIC, passionné par la technologie et l'innovation. Je me
              forme actuellement aux fondamentaux de la big data et de l'IA.
            </p>
            <p>
              Basé à Yopougon, Abidjan, j'aime combiner développement web et intelligence artificielle pour créer
              des solutions concrètes — comme mon système de recyclage intelligent de l'eau, primé lors du
              Technovore Hackathon 2025.
            </p>
            <p>
              Ouvert aux discussions sur les innovations technologiques et aux opportunités de stage ou d'emploi
              dans le domaine.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
