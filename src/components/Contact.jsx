import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = form
    if (name && email && message) {
      const subject = encodeURIComponent(`Contact depuis le portfolio - ${name}`)
      const body = encodeURIComponent(`${message} (${email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    } else {
      alert('Merci de remplir tous les champs.')
    }
  }

  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <Reveal as="span" className="eyebrow">Travaillons ensemble</Reveal>
        <Reveal as="h2" className="section-title">Contact</Reveal>
        <Reveal as="p" className="section-lead">
          Une question, une opportunité de stage ou un projet à concrétiser ? Écrivez-moi, je réponds avec plaisir.
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>{profile.email}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4>Téléphone</h4>
                  <p>{profile.phone}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Localisation</h4>
                  <p>{profile.location}, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
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
          </Reveal>

          <Reveal as="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Votre nom"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Votre email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Votre message"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer le message <i className="fas fa-paper-plane"></i>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
