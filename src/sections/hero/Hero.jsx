import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import AnimatedText from '../../components/ui/AnimatedText.jsx'
import Button from '../../components/ui/Button.jsx'
import HeroVisual from './HeroVisual.jsx'

const EASE = [0.22, 1, 0.36, 1]
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
})

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-dvh flex-col overflow-hidden pt-24 md:pt-28">
      {/* Fond : grille + lueur qui dérive lentement */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,#000_10%,transparent_70%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-[20%] top-[5%] -z-10 aspect-square w-[80vw] max-w-[900px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-2xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-page relative flex flex-1 flex-col">
        <HeroVisual className="pointer-events-none absolute -right-[42%] -top-[6%] sm:top-[2%] -z-10 w-[120%] max-w-[640px] opacity-20 sm:-right-[20%] sm:w-[80%] md:opacity-50 lg:right-0 lg:top-1/2 lg:w-[46%] lg:-translate-y-[55%] lg:opacity-100" />

        <div className="flex flex-1 flex-col justify-center py-10">
          <motion.p {...fadeUp(0.1)} className="eyebrow mb-8 inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-bg/60 px-3.5 py-2 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.status}
          </motion.p>

          <h1 id="hero-title" className="font-display font-semibold uppercase leading-[0.86] tracking-[-0.04em]">
            <span className="sr-only">Yao Konan — {t.hero.roleA}, {t.hero.roleB}</span>
            <span aria-hidden="true" className="block text-[clamp(4.2rem,17vw,11.5rem)]">
              <AnimatedText as="span" text="Yao" immediate delay={0.25} className="block" />
              <AnimatedText as="span" text="Konan" immediate delay={0.35} className="block" wordClassName="text-gradient" />
            </span>
          </h1>

          <motion.p
            {...fadeUp(0.65)}
            aria-hidden="true"
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-display text-[clamp(1.05rem,0.8rem+1.1vw,1.6rem)] font-medium uppercase tracking-[0.08em]"
          >
            <span>{t.hero.roleA}</span>
            <span className="h-px w-8 bg-accent" />
            <span className="text-muted">{t.hero.roleB}</span>
          </motion.p>

          <motion.p {...fadeUp(0.8)} className="mt-6 max-w-xl text-base text-muted md:text-lg">
            {t.hero.lead}
          </motion.p>

          <motion.div {...fadeUp(0.95)} className="mt-10 flex flex-wrap gap-3">
            <Button to="/#projects">
              {t.hero.ctaWork}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
            <Button to="/#contact" variant="ghost">
              {t.hero.ctaContact}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex items-end justify-between gap-6 border-t border-line py-6 text-xs text-subtle"
        >
          <ul className="flex flex-col gap-1 font-mono sm:flex-row sm:gap-6">
            {t.hero.meta.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <a href="#about" className="group hidden items-center gap-2 font-mono uppercase tracking-[0.14em] transition-colors hover:text-fg sm:inline-flex">
            {t.hero.scroll}
            <ArrowDown className="size-3.5 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
