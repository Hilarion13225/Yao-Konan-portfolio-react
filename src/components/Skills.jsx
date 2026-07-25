import Reveal from './Reveal.jsx'
import { skillsRow1, skillsRow2 } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function SkillCard({ item }) {
  return (
    <div className="skill-icon-card">
      {item.icon ? (
        <i className={item.icon} style={{ color: item.color }}></i>
      ) : (
        <span className="badge-txt" style={{ background: item.bg, color: item.color }}>
          {item.badge}
        </span>
      )}
      <span className="skill-label">{item.label}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse }) {
  // Les items sont doublés pour un défilement en boucle infinie transparent
  const doubled = [...items, ...items]
  return (
    <div className={`marquee-row ${reverse ? 'reverse' : ''} reveal active`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <SkillCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="span" className="eyebrow">{t.skills.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title">{t.skills.title}</Reveal>
        <Reveal as="p" className="section-lead">
          {t.skills.lead}
        </Reveal>
        <div className="skills-marquee">
          <MarqueeRow items={skillsRow1} />
          <MarqueeRow items={skillsRow2} reverse />
        </div>
      </div>
    </section>
  )
}
