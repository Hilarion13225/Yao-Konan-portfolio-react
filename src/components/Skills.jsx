import { useRef, useState } from 'react'
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
  const rowRef = useRef(null) // .marquee-row : c'est LUI le vrai conteneur défilant (overflow-x:auto)
  const [paused, setPaused] = useState(false)
  const drag = useRef({ active: false, startX: 0, startScroll: 0 })

  function onPointerDown(e) {
    const row = rowRef.current
    if (!row) return
    drag.current = { active: true, startX: e.clientX, startScroll: row.scrollLeft }
    setPaused(true)
    row.setPointerCapture?.(e.pointerId)
  }

  function onPointerMove(e) {
    if (!drag.current.active) return
    const row = rowRef.current
    if (!row) return
    const dx = e.clientX - drag.current.startX
    row.scrollLeft = drag.current.startScroll - dx
  }

  function endDrag() {
    drag.current.active = false
    setPaused(false)
  }

  return (
    <div
      ref={rowRef}
      className={`marquee-row ${reverse ? 'reverse' : ''} ${paused ? 'paused' : ''} reveal active`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
    >
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
