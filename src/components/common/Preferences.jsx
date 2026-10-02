import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { useTheme } from '../../hooks/useTheme.js'
import { cn } from '../../utils/cn.js'

const pill = 'inline-flex h-9 items-center justify-center rounded-full border border-line px-3 text-xs text-muted transition-colors hover:border-line-strong hover:text-fg'

export function LangToggle({ className }) {
  const { lang, toggleLang, t } = useLanguage()
  return (
    <button type="button" onClick={toggleLang} className={cn(pill, 'gap-1 font-mono', className)} aria-label={t.lang.label}>
      <span className={lang === 'fr' ? 'text-fg' : undefined}>FR</span>
      <span aria-hidden="true" className="text-subtle">/</span>
      <span className={lang === 'en' ? 'text-fg' : undefined}>EN</span>
    </button>
  )
}

export function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(pill, 'w-9 px-0', className)}
      aria-label={dark ? t.theme.toLight : t.theme.toDark}
    >
      {dark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  )
}
