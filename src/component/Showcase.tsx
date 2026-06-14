import { motion } from 'framer-motion'
import { cakes } from '../data/cakes'
import { resolveImage } from '../lib/images'
import { buildWhatsAppUrl } from '../lib/brand'
import { SectionHeading, Button } from './ui/Primitives'
import { ArrowRight } from './icons'

const featured = cakes.slice(0, 3)
const ease = [0.22, 1, 0.36, 1] as const

export default function Showcase() {
  return (
    <section id="destacados" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Favoritos de la casa"
          title={<>Creaciones que enamoran a primera vista</>}
          copy="Cada pastel es una pieza única: textura cuidada, sabor memorable y una presentación pensada para celebrar."
        />

        <div className="mt-14 flex flex-col gap-16 sm:gap-24">
          {featured.map((cake, index) => {
            const reversed = index % 2 === 1
            return (
              <div
                key={cake.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease }}
                  className={`relative ${reversed ? 'lg:order-2' : ''}`}
                >
                  <div className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-rose-soft/60 blur-2xl" />
                  <div className="overflow-hidden rounded-[2rem] shadow-[0_40px_70px_-32px_rgba(92,68,51,0.5)]">
                    <motion.img
                      src={resolveImage(cake.image) || '/placeholder.svg'}
                      alt={cake.name}
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease }}
                      className="aspect-[5/4] w-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease, delay: 0.1 }}
                  className={reversed ? 'lg:order-1' : ''}
                >
                  <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {cake.tag ?? 'Firma D’PER'}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl text-primary sm:text-4xl">
                    {cake.name}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted">
                    {cake.descripcion}
                  </p>
                  <div className="mt-6 flex items-center gap-5">
                    <span className="font-serif text-3xl text-primary">{cake.price}</span>
                    <Button
                      href={buildWhatsAppUrl(`Hola D’PER, me interesa el ${cake.name}.`)}
                      variant="outline"
                      external
                    >
                      Pedir este
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
