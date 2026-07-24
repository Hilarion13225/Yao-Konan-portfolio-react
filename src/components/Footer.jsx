import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © 2026 Portfolio développé par <a href={`mailto:${profile.email}`}>KONAN Yao</a>
        </p>
        <div className="footer-socials">
          <a href={`mailto:${profile.email}`}>
            <i className="fas fa-envelope"></i>
          </a>
          <a href={profile.linkedin}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={profile.whatsapp}>
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
