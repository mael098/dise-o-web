import { motion } from 'framer-motion'
import { allPhotos } from '../lib/images'
import { SectionHeading } from './ui/Primitives'

const ease = [0.22, 1, 0.36, 1] as const

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Inspiración dulce"
          title="Una galería para antojar"
          copy="Acabados delicados, decoraciones a mano y la calidez artesanal que distingue cada creación de la casa."
          align="center"
        />

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {allPhotos.map((src, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease, delay: (i % 4) * 0.05 }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={src || '/placeholder.svg'}
                alt={`Creación artesanal D’PER número ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                D’PER Signature
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
