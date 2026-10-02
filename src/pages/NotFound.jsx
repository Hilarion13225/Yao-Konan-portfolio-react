import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  const { t } = useLanguage()
  useDocumentMeta({ title: '404' })

  return (
    <section className="container-page flex min-h-[80dvh] flex-col justify-center pt-24">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 font-display text-[clamp(2.6rem,1.4rem+5vw,6rem)] font-semibold">{t.notFound.title}</h1>
      <p className="mt-4 max-w-md text-muted">{t.notFound.text}</p>
      <div className="mt-10">
        <Button to="/">
          <ArrowLeft className="size-4" aria-hidden="true" /> {t.notFound.back}
        </Button>
      </div>
    </section>
  )
}
