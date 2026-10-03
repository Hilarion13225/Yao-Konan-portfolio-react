import { marqueeTech } from '../../data/skills.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { cn } from '../../utils/cn.js'

// Bande défilante lente, en pause au survol. Le contenu dupliqué est masqué
// aux lecteurs d'écran ; en reduced motion la bande devient défilable à la main.
export default function TechMarquee({ className }) {
  const { tr } = useLanguage()
  const items = marqueeTech.map(tr)
  return (
    <div className={cn('group relative border-y border-line py-6 md:py-8', className)}>
      <p className="sr-only">{items.join(', ')}</p>
      <div aria-hidden="true" className="mask-fade-x overflow-hidden motion-reduce:overflow-x-auto">
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none [--marquee-duration:70s] max-md:[--marquee-duration:45s]"
        >
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {items.map((tech) => (
                <li key={`${copy}-${tech}`} className="flex items-center">
                  <span className="whitespace-nowrap px-6 font-display text-[clamp(1.6rem,1rem+2.4vw,3rem)] font-medium uppercase tracking-tight text-muted/70 transition-colors hover:text-fg md:px-10">
                    {tech}
                  </span>
                  <span className="size-1.5 rounded-full bg-accent/60" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
