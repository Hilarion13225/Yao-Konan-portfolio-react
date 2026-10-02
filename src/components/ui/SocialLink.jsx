import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons.jsx'
import { cn } from '../../utils/cn.js'

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, whatsapp: WhatsappIcon, email: Mail }

export function SocialIcon({ name, className }) {
  const Icon = ICONS[name]
  return <Icon className={cn('size-[1.05em] shrink-0', className)} aria-hidden="true" />
}

export default function SocialLink({ social, showLabel = false, className }) {
  const Icon = ICONS[social.key]
  const external = !social.href.startsWith('mailto:')
  return (
    <a
      href={social.href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      aria-label={showLabel ? undefined : social.label}
      className={cn('group inline-flex items-center gap-2 text-muted transition-colors hover:text-fg', className)}
    >
      <Icon className="size-[1.05em] shrink-0" aria-hidden="true" />
      {showLabel && <span className="link-underline">{social.label}</span>}
    </a>
  )
}
