import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { SectionHeading } from './ui/Primitives'
import { LeafIcon, SparkleIcon, TruckIcon, HeartIcon } from './icons'

const benefits = [
  {
    icon: LeafIcon,
    title: 'Ingredientes frescos',
    copy: 'Seleccionamos materia prima de primera calidad para un sabor genuino en cada bocado.',
  },
  {
    icon: SparkleIcon,
    title: 'Diseños personalizados',
    copy: 'Creamos pasteles a medida para cumpleaños, bodas y celebraciones especiales.',
  },
  {
    icon: TruckIcon,
    title: 'Entrega coordinada',
    copy: 'Entregas puntuales dentro de Altamira y alrededores para que todo salga perfecto.',
  },
  {
    icon: HeartIcon,
    title: 'Atención personalizada',
    copy: 'Te acompañamos en cada detalle, desde la idea hasta el momento de soplar las velas.',
  },
]

export default function Benefits() {
  return (
    <section id="nosotros" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Una experiencia premium, de principio a fin"
          copy="Más que pasteles: cuidamos cada parte del proceso para que tu celebración sea inolvidable."
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((b) => (
            <motion.article
              key={b.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-[0_28px_55px_-28px_rgba(92,68,51,0.45)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-soft text-primary">
                <b.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-primary">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
