import { motion } from 'framer-motion'
import { gallery1, gallery2 } from '../lib/images'
import { BRAND, buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/brand'
import { Button } from './ui/Primitives'
import { ArrowRight, StarIcon, WhatsAppIcon } from './icons'

const heroMain = gallery2[6] ?? gallery1[0]
const heroSecondary = gallery1[1] ?? gallery2[0]
const heroTertiary = gallery2[2] ?? gallery1[2]

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const waUrl = buildWhatsAppUrl(DEFAULT_WA_MESSAGE)

  return (
    <section id="inicio" className="bg-grain relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-ivory/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {BRAND.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="mt-6 text-balance font-serif text-5xl leading-[0.98] text-primary sm:text-6xl lg:text-7xl"
          >
            Pasteles artesanales creados para{' '}
            <span className="italic text-accent">momentos inolvidables</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            En {BRAND.name} horneamos con alma artesanal, ingredientes frescos y un diseño
            cuidado en cada detalle. Sabores que se sienten como hogar, presentación digna de
            celebrar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#catalogo" variant="primary">
              Ver catálogo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href={waUrl} variant="outline" external>
              <WhatsAppIcon className="h-4 w-4" />
              Pedir por WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {[gallery1[0], gallery1[3], gallery2[1]].map((src, i) => (
                <img
                  key={i}
                  src={src || '/placeholder.svg'}
                  alt=""
                  aria-hidden
                  className="h-11 w-11 rounded-full border-2 border-ivory object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="mt-1 text-sm text-muted">
                <span className="font-semibold text-primary">+500 clientes</span> celebran con
                nosotros
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(92,68,51,0.55)]">
            <img
              src={heroMain || '/placeholder.svg'}
              alt="Pastel artesanal de la firma D’PER"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="absolute -bottom-6 -left-4 w-40 overflow-hidden rounded-2xl border-4 border-ivory shadow-xl sm:-left-8 sm:w-48"
          >
            <img
              src={heroSecondary || '/placeholder.svg'}
              alt="Detalle de repostería artesanal"
              className="aspect-square w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.62 }}
            className="absolute -right-3 top-8 hidden w-32 overflow-hidden rounded-2xl border-4 border-ivory shadow-xl sm:block sm:w-36"
          >
            <img
              src={heroTertiary || '/placeholder.svg'}
              alt="Pastel decorado con acabado premium"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.75 }}
            className="absolute -right-2 bottom-10 flex items-center gap-3 rounded-2xl border border-border bg-ivory/90 px-4 py-3 shadow-lg backdrop-blur sm:right-6"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-soft text-primary">
              <HeartSmall />
            </span>
            <span className="text-sm">
              <strong className="block font-serif text-lg leading-none text-primary">100%</strong>
              <span className="text-xs text-muted">Artesanal</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function HeartSmall() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
      <path d="M12 20s-7-4.5-9.5-9C1 8 2.5 5 5.5 5 7.5 5 9 6.3 12 9c3-2.7 4.5-4 6.5-4 3 0 4.5 3 3 6-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  )
}
