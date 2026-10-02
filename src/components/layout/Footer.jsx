import { ArrowUp } from 'lucide-react'
import { site, socials } from '../../config/site.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import SocialLink from '../ui/SocialLink.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const links = socials.filter((s) => s.key !== 'whatsapp')

  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12 md:items-end">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-semibold uppercase tracking-[0.1em]">Yao Konan</p>
          <p className="mt-2 text-sm text-muted">Full-Stack Developer · Data &amp; AI</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:col-span-5">
          {links.map((s) => (
            <li key={s.key}>
              <SocialLink social={s} showLabel />
            </li>
          ))}
        </ul>
        <div className="md:col-span-2 md:text-right">
          <a href="#top" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
            {t.footer.top} <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-xs text-subtle sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono">{t.footer.built}</p>
      </div>
    </footer>
  )
}
