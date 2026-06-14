import { motion } from 'framer-motion'
import { gallery2 } from '../lib/images'
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/brand'
import { Button } from './ui/Primitives'
import { WhatsAppIcon } from './icons'

const ease = [0.22, 1, 0.36, 1] as const
const bg = gallery2[10] ?? gallery2[0]

export default function FinalCTA() {
  return (
    <section id="pedido" className="px-3 pb-20 sm:px-6 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem]"
      >
        <img
          src={bg || '/placeholder.svg'}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />

        <div className="relative px-6 py-20 text-center sm:px-12 sm:py-28">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent"
          >
            <span className="h-px w-6 bg-accent/70" /> Haz tu pedido hoy
          </motion.span>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance font-serif text-4xl leading-tight text-cream sm:text-6xl">
            Tu próximo momento especial merece un pastel extraordinario
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-cream/75">
            Escríbenos por WhatsApp y aparta tu pastel personalizado para cumpleaños,
            aniversarios o cualquier celebración.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
              variant="primary"
              external
              className="bg-accent px-8 py-4 text-base text-accent-foreground hover:bg-accent"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Ordenar por WhatsApp
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
