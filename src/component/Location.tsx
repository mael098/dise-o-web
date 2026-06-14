import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import { SectionHeading } from './ui/Primitives'
import { MapPinIcon, ClockIcon, CheckIcon } from './icons'

const points = [
  'Atención personalizada para pedidos y cotizaciones.',
  'Opciones para cumpleaños, mesas dulces y regalos.',
  'Entregas coordinadas dentro de Altamira y alrededores.',
]

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col rounded-[2rem] border border-border bg-card p-8 sm:p-10"
          >
            <SectionHeading
              eyebrow="Visítanos"
              title="Estamos en Altamira"
              copy="Te esperamos para probar nuestros pasteles artesanales recién hechos y planear tu próxima celebración."
            />

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-sand/50 p-4">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm font-medium text-primary">
                D’PER Pastelería · Zona Centro, Altamira, Tamaulipas
              </p>
            </div>
            <div className="mt-3 flex items-start gap-3 rounded-2xl bg-sand/50 p-4">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm font-medium text-primary">
                Lunes a Sábado · 9:00 a 20:00 hrs
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="min-h-[340px] overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_60px_-34px_rgba(92,68,51,0.5)]"
          >
            <iframe
              title="Mapa de D’PER en Altamira, Tamaulipas"
              src="https://www.google.com/maps?q=Altamira%2C%20Tamaulipas&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[340px] w-full border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
