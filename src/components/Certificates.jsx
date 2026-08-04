import Reveal from './Reveal.jsx'
import { certificates } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Certificates() {
  const { lang, t } = useLanguage()

  // Tri du plus récent au plus ancien, peu importe l'ordre dans data.js
  const sortedCertificates = [...certificates].sort(
    (a, b) => new Date(b.dateISO) - new Date(a.dateISO)
  )

  return (
    <section className="section" id="certificates" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <Reveal as="span" className="eyebrow">{t.certificates.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title">{t.certificates.title}</Reveal>
        <Reveal as="p" className="section-lead">
          {t.certificates.lead}
        </Reveal>
        <div className="certificates-grid">
          {sortedCertificates.map((cert, i) => (
            <Reveal key={i} className="certificate-card">
              <div className="certificate-icon">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title[lang]} />
                ) : (
                  <i className="fas fa-certificate"></i>
                )}
              </div>
              <div className="certificate-body">
                <h3>{cert.title[lang]}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <span className="certificate-date">{cert.date[lang]}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    className="certificate-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.certificates.viewCredential} <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}