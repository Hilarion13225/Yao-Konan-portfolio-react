import { ArrowDown, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import AnimatedText from '../../components/ui/AnimatedText.jsx'
import Button from '../../components/ui/Button.jsx'
import Portrait from '../../components/common/Portrait.jsx'
import HeroVisual from './HeroVisual.jsx'

// Animations d'entrée en CSS : le texte s'affiche sans attendre le JavaScript d'animation.
const fadeUp = (delay) => ({ animationDelay: `${delay}s` })

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-dvh flex-col overflow-hidden pt-24 md:pt-28">
      {/* Fond : grille + lueur qui dérive lentement */}
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,#000_10%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-[20%] top-[5%] -z-10 aspect-square w-[80vw] max-w-[900px] animate-drift rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] motion-reduce:animate-none"
      />

      <div className="container-page relative flex flex-1 flex-col">
        {/* Mobile / tablette : portrait en tête de page, le nom vient le chevaucher */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative -mx-5 -mt-24 h-[56svh] max-h-[620px] animate-fade-in md:-mx-10 md:-mt-28 lg:hidden"
        >
          <Portrait
            eager
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-[50%_22%] [mask-image:linear-gradient(to_bottom,#000_50%,transparent_96%)]"
          />
        </div>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-12">
          <div className="relative z-10 -mt-[16svh] flex flex-col justify-center pb-10 lg:col-span-7 lg:mt-0 lg:py-10">
            <p
              style={fadeUp(0.1)}
              className="eyebrow mb-8 inline-flex animate-fade-up items-center gap-2.5 self-start rounded-full border border-line bg-bg/60 px-3.5 py-2 backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {t.hero.status}
            </p>

            <h1 id="hero-title" className="font-display font-semibold uppercase leading-[0.86] tracking-[-0.04em]">
              <span className="sr-only">
                Yao Konan — {t.hero.roleA}, {t.hero.roleB}
              </span>
              <span aria-hidden="true" className="block text-[clamp(4.2rem,19vw,9rem)] lg:text-[clamp(6rem,10.5vw,10.5rem)]">
                <AnimatedText as="span" text="Yao" immediate delay={0.15} className="block" />
                <AnimatedText as="span" text="Konan" immediate delay={0.25} className="block" wordClassName="text-gradient" />
              </span>
            </h1>

            <p
              aria-hidden="true"
              style={fadeUp(0.4)}
              className="mt-6 flex animate-fade-up flex-wrap items-center gap-x-4 gap-y-1 font-display text-[clamp(1.05rem,0.8rem+1.1vw,1.6rem)] font-medium uppercase tracking-[0.08em]"
            >
              <span>{t.hero.roleA}</span>
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted">{t.hero.roleB}</span>
            </p>

            <p style={fadeUp(0.5)} className="mt-6 max-w-xl animate-fade-up text-base text-muted md:text-lg">
              {t.hero.lead}
            </p>

            <div style={fadeUp(0.6)} className="mt-10 flex animate-fade-up flex-wrap gap-3">
              <Button to="/#projects">
                {t.hero.ctaWork}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Button>
              <Button to="/#contact" variant="ghost">
                {t.hero.ctaContact}
              </Button>
            </div>
          </div>

          <HeroVisual className="hidden lg:col-span-5 lg:block" />
        </div>

        <div style={fadeUp(0.9)} className="flex animate-fade-in items-end justify-between gap-6 border-t border-line py-6 text-xs text-subtle">
          <ul className="flex flex-col gap-1 font-mono sm:flex-row sm:gap-6">
            {t.hero.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href="#about"
            className="group hidden items-center gap-2 font-mono uppercase tracking-[0.14em] transition-colors hover:text-fg sm:inline-flex"
          >
            {t.hero.scroll}
            <ArrowDown className="size-3.5 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
