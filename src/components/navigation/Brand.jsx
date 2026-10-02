import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function Brand({ onClick }) {
  const { t } = useLanguage()
  return (
    <Link to="/" onClick={onClick} aria-label={t.nav.home} className="group inline-flex items-center gap-2.5" data-cursor="hover">
      <span aria-hidden="true" className="relative grid size-8 place-items-center rounded-lg border border-line-strong font-display text-[0.8rem] font-semibold tracking-tight">
        YK
        <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-cyan" />
      </span>
      <span className="whitespace-nowrap font-display text-[0.95rem] font-semibold uppercase tracking-[0.12em] max-[359px]:sr-only">Yao Konan</span>
    </Link>
  )
}
