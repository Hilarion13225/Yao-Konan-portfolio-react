import Reveal from './Reveal.jsx'
import { profile } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()
  const [p1Before, p1After] = t.about.p1.split('{fullName}')

  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="span" className="eyebrow">
          {t.about.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section-title">
          {t.about.title}
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-photo">
              <img src={profile.photo} alt={profile.name} />
              <div className="badge-float">
                <strong>{t.about.badgeNumber}</strong>
                <span>{t.about.badgeLabel}</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="about-text">
            <p>
              {p1Before}
              <strong>{profile.fullName}</strong>
              {p1After}
            </p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
