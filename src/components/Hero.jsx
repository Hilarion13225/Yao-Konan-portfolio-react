import Reveal from './Reveal.jsx'
import { profile } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <Reveal>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero-title">
            {t.hero.greeting}
            <span className="accentline">{t.hero.role}</span>
          </h1>
          <p className="hero-sub">{t.hero.subtitle}</p>
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
              {t.hero.ctaContact} <i className="fas fa-arrow-right"></i>
            </a>
            <a href={profile.cv} className="btn btn-outline">
              {t.hero.ctaCV} <i className="fas fa-file-download"></i>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
              <span className="terminal-title">{lang === 'fr' ? 'etudiant.js' : 'student.js'}</span>
            </div>
            {lang === 'fr' ? (
              <div className="terminal-body">
                <span className="k">const</span> etudiant = {'{'}
                {'\n'}  nom: <span className="s">'KONAN Yao Serge-Hilarion Boigny'</span>,
                {'\n'}  titre: <span className="s">'Étudiant Big Data & IA'</span>,
                {'\n'}  ecole: <span className="s">'ESATIC — Master 1 BIHAR'</span>,
                {'\n'}  localisation: <span className="s">'Yopougon, Abidjan | Côte d'Ivoire'</span>,
                {'\n'}  competences: [
                {'\n'}    <span className="s">'Python'</span>, <span className="s">'Machine Learning'</span>,{' '}
                <span className="s">'Deep Learning'</span>,
                {'\n'}    <span className="s">'Computer Vision'</span>, <span className="s">'React.js'</span>,{' '}
                <span className="s">'Node.js'</span>,
                {'\n'}    <span className="s">'Django'</span>, <span className="s">'PHP'</span>,{' '}
                <span className="s">'PostgreSQL'</span>, <span className="s">'MongoDB'</span>
                {'\n'}  ],
                {'\n'}  curieux: <span className="k">true</span>,
                {'\n'}  autonome: <span className="k">true</span>,
                {'\n'}  passionne: <span className="k">true</span>,
                {'\n'}  <span className="c">{t.terminal.comment}</span>
                {'\n'}  disponible: <span className="fn">function</span>() {'{'}
                {'\n'}    <span className="k">return</span> <span className="k">this</span>.curieux &&{' '}
                <span className="k">this</span>.passionne;
                {'\n'}  {'}'}
                {'\n'}
                {'}'};<span className="cursor-blink"></span>
              </div>
            ) : (
              <div className="terminal-body">
                <span className="k">const</span> student = {'{'}
                {'\n'}  name: <span className="s">'KONAN Yao Serge-Hilarion Boigny'</span>,
                {'\n'}  title: <span className="s">'Big Data & AI Student'</span>,
                {'\n'}  school: <span className="s">'ESATIC — Master 1 BIHAR'</span>,
                {'\n'}  location: <span className="s">'Yopougon, Abidjan | Ivory Coast'</span>,
                {'\n'}  skills: [
                {'\n'}    <span className="s">'Python'</span>, <span className="s">'Machine Learning'</span>,{' '}
                <span className="s">'Deep Learning'</span>,
                {'\n'}    <span className="s">'Computer Vision'</span>, <span className="s">'React.js'</span>,{' '}
                <span className="s">'Node.js'</span>,
                {'\n'}    <span className="s">'Django'</span>, <span className="s">'PHP'</span>,{' '}
                <span className="s">'PostgreSQL'</span>, <span className="s">'MongoDB'</span>
                {'\n'}  ],
                {'\n'}  curious: <span className="k">true</span>,
                {'\n'}  autonomous: <span className="k">true</span>,
                {'\n'}  passionate: <span className="k">true</span>,
                {'\n'}  <span className="c">{t.terminal.comment}</span>
                {'\n'}  available: <span className="fn">function</span>() {'{'}
                {'\n'}    <span className="k">return</span> <span className="k">this</span>.curious &&{' '}
                <span className="k">this</span>.passionate;
                {'\n'}  {'}'}
                {'\n'}
                {'}'};<span className="cursor-blink"></span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
