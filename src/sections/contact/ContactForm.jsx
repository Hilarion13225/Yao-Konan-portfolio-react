import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// zod/mini : même validation que zod, mais tree-shakable (~90 Ko gzip de moins)
import * as z from 'zod/mini'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { sendContactMessage } from '../../services/contact.js'
import Button from '../../components/ui/Button.jsx'
import { cn } from '../../utils/cn.js'

const text = (min, message) => z.string().check(z.trim(), z.minLength(min, message))

const buildSchema = (e) =>
  z.object({
    name: text(2, e.name),
    email: z.email(e.email),
    subject: text(3, e.subject),
    message: text(10, e.message),
  })

function Field({ id, label, error, textarea = false, register, ...props }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className={cn('relative', textarea && 'sm:col-span-2')}>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <Tag
        id={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'mt-2 block w-full border-b bg-transparent pb-3 pt-1 text-lg text-fg outline-none transition-colors placeholder:text-subtle/60 focus:border-accent',
          textarea && 'min-h-36 resize-y',
          error ? 'border-red-400' : 'border-line-strong',
        )}
        {...register(id)}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const { lang, t } = useLanguage()
  const f = t.contact.form
  const schema = useMemo(() => buildSchema(f.errors), [f.errors])
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema), mode: 'onTouched' })

  const onSubmit = (data) => {
    sendContactMessage(data)
    setSent(true)
    reset()
  }

  return (
    <form key={lang} onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-8 sm:grid-cols-2">
      <Field id="name" label={f.name} autoComplete="name" register={register} error={errors.name} />
      <Field id="email" label={f.email} type="email" autoComplete="email" register={register} error={errors.email} />
      <div className="sm:col-span-2">
        <Field id="subject" label={f.subject} register={register} error={errors.subject} />
      </div>
      <Field id="message" label={f.message} textarea rows={5} register={register} error={errors.message} />

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="accent" disabled={isSubmitting} className="self-start">
          {f.submit} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Button>
        <p aria-live="polite" className="text-sm text-muted">
          {sent && (
            <span className="inline-flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden="true" />
              {f.sent}
            </span>
          )}
        </p>
      </div>
    </form>
  )
}
