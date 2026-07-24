import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <Reveal>
          <span className="eyebrow">Portfolio / Étudiant Big Data & IA</span>
          <h1 className="hero-title">
            Bonjour, je suis KONAN Yao
            <span className="accentline">Big Data & IA — ESATIC</span>
          </h1>
          <p className="hero-sub">
            Étudiant en Master 1 Big Data & Intelligence Artificielle (BIHAR) à l'ESATIC, passionné par la
            technologie et l'innovation, futur professionnel de la big data et de l'IA.
          </p>
          <div className="hero-socials">
            <a href={`mailto:${profile.email}`} className="social-icon" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href={profile.linkedin} className="social-icon" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={profile.whatsapp} className="social-icon" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Me contacter <i className="fas fa-arrow-right"></i>
            </a>
            <a href={profile.cv} className="btn btn-outline">
              Télécharger mon CV <i className="fas fa-file-download"></i>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="terminal-title">etudiant.js</span>
            </div>
            <div className="terminal-body">
              <span className="k">const</span> etudiant = {'{'}
              {'\n'}  nom: <span className="s">'KONAN Yao Serge-Hilarion'</span>,
              {'\n'}  titre: <span className="s">'Étudiant Big Data & IA'</span>,
              {'\n'}  ecole: <span className="s">'ESATIC — Master 1 BIHAR'</span>,
              {'\n'}  localisation: <span className="s">'Yopougon, Abidjan'</span>,
              {'\n'}  competences: [
              {'\n'}    <span className="s">'Python'</span>, <span className="s">'Machine Learning'</span>,{' '}
              <span className="s">'Deep Learning'</span>,
              {'\n'}    <span className="s">'Computer Vision'</span>, <span className="s">'React.js'</span>,{' '}
              <span className="s">'Node.js'</span>,
              {'\n'}    <span className="s">'Django'</span>, <span className="s">'PHP'</span>,{' '}
              <span className="s">'PostgreSQL'</span>
              {'\n'}  ],
              {'\n'}  curieux: <span className="k">true</span>,
              {'\n'}  autonome: <span className="k">true</span>,
              {'\n'}  passionne: <span className="k">true</span>,
              {'\n'}  <span className="c">// 1er place — Technovore Hackathon 2025</span>
              {'\n'}  disponible: <span className="fn">function</span>() {'{'}
              {'\n'}    <span className="k">return</span> <span className="k">this</span>.curieux &&{' '}
              <span className="k">this</span>.passionne;
              {'\n'}  {'}'}
              {'\n'}
              {'}'};<span className="cursor-blink"></span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
