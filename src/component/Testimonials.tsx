import { motion } from 'framer-motion'
import { gallery1, gallery2 } from '../lib/images'
import { fadeUp, stagger } from '../lib/motion'
import { SectionHeading } from './ui/Primitives'
import { StarIcon } from './icons'

const testimonials = [
  {
    name: 'María Fernanda',
    role: 'Cumpleaños de su hija',
    quote:
      'El pastel quedó hermoso y delicioso. Superó todas mis expectativas, ¡todos en la fiesta lo amaron!',
    avatar: gallery1[0],
  },
  {
    name: 'Jorge Treviño',
    role: 'Aniversario',
    quote:
      'Atención impecable y un sabor casero increíble. Se nota el cuidado artesanal en cada detalle.',
    avatar: gallery2[3],
  },
  {
    name: 'Daniela Ríos',
    role: 'Mesa de postres',
    quote:
      'Diseñaron justo lo que imaginaba para mi evento. Profesionales, puntuales y muy creativos.',
    avatar: gallery2[8],
  },
]

export default function Testimonials() {
  return (
    <section className="bg-sand/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Lo que dicen"
          title="Historias dulces de nuestros clientes"
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[0_18px_45px_-30px_rgba(92,68,51,0.4)]"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty font-serif text-xl italic leading-relaxed text-primary">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar || '/placeholder.svg'}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-rose-soft"
                />
                <span>
                  <span className="block font-semibold text-primary">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
