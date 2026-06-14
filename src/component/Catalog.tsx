import { motion } from 'framer-motion'
import { cakes } from '../data/cakes'
// import { resolveImage } from '../lib/images'
import { fadeUp, staggerFast } from '../lib/motion'
import { SectionHeading } from './ui/Primitives'
import { CheckIcon } from './icons'

type CatalogProps = {
  selectedProducts: Set<string>
  toggleProduct: (name: string) => void
}

export default function Catalog({ selectedProducts, toggleProduct }: CatalogProps) {
  return (
    <section id="catalogo" className="bg-sand/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Carta completa"
            title="Nuestro catálogo de pasteles"
            copy="Selecciona tus favoritos y arma tu pedido. Te lo enviamos directo por WhatsApp para cotizar."
          />
          <p className="hidden shrink-0 text-sm text-muted sm:block">
            Toca una tarjeta para agregarla a tu pedido
          </p>
        </div>

        <motion.ul
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cakes.map((cake) => {
            const selected = selectedProducts.has(cake.name)
            return (
              <motion.li key={cake.id} variants={fadeUp}>
                <button
                  type="button"
                  onClick={() => toggleProduct(cake.name)}
                  aria-pressed={selected}
                  className={`group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border bg-card text-left transition-all duration-400 ${
                    selected
                      ? 'border-accent shadow-[0_24px_50px_-22px_rgba(200,163,91,0.7)] -translate-y-1'
                      : 'border-border hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-26px_rgba(92,68,51,0.45)]'
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={cake.image || '/placeholder.svg'}
                      alt={cake.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/35 via-transparent to-transparent opacity-70" />
                    {cake.tag ? (
                      <span className="absolute left-3 top-3 rounded-full bg-ivory/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary backdrop-blur">
                        {cake.tag}
                      </span>
                    ) : null}
                    <span
                      className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        selected
                          ? 'border-accent bg-accent text-primary-foreground'
                          : 'border-ivory/80 bg-ivory/30 text-transparent backdrop-blur'
                      }`}
                    >
                      <CheckIcon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-xl leading-tight text-primary">
                      {cake.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {cake.descripcion}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-serif text-2xl text-primary">{cake.price}</span>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wide transition-colors ${
                          selected ? 'text-accent' : 'text-muted'
                        }`}
                      >
                        {selected ? 'Agregado' : 'Agregar +'}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
