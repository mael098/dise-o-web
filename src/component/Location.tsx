import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import { SectionHeading } from './ui/Primitives'
import { MapPinIcon, ClockIcon, CheckIcon } from './icons'

const points = [
  'Atención personalizada para pedidos y cotizaciones.',
  'Opciones para cumpleaños, mesas dulces y regalos.',
  'Entregas coordinadas dentro de la región.',
]

const branches = [
  {
    name: 'Sucursal Altamira',
    lat: 22.397739815867087,
    lng: -97.93632487834957,
  },
  {
    name: 'Sucursal González',
    lat: 22.73533965602006,
    lng: -98.32995031231535,
  },
  {
    name: 'Sucursal Estación Manuel',
    lat: 22.920135233474664,
    lng: -98.0759980137803,
  },
  {
    name: 'Sucursal Xicoténcatl',
    lat: 22.827553292320804,
    lng: -98.42729734775638,
  },
  {
    name: 'Sucursal González Centro',
    lat: 22.727312285603936,
    lng: -98.3218573793763,
  },
  {
    name: 'Sucursal El Mante',
    lat: 22.21273480901603,
    lng: -98.37774066549323,
  },
  {
    name: 'Sucursal Villa Manuel',
    lat: 22.546635874254676,
    lng: -98.14987771217287,
  },
]

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="rounded-[2rem] border border-border bg-card p-8 sm:p-10"
          >
            <SectionHeading
              eyebrow="Nuestras sucursales"
              title="Encuentra la más cercana"
              copy="D'PER Pastelería cuenta con varias sucursales para atenderte con la calidad y sabor que nos caracteriza."
            />

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-sand/50 p-4">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm font-medium text-primary">
                Lunes a Sábado · 9:00 AM a 8:00 PM
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="rounded-2xl border border-border bg-sand/40 p-4 transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />

                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">
                        {branch.name}
                      </h3>

                      <p className="mt-1 text-xs text-muted">
                        {branch.lat}, {branch.lng}
                      </p>

                      <a
                        href={`https://www.google.com/maps?q=${branch.lat},${branch.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                      >
                        Ver ubicación
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_60px_-34px_rgba(92,68,51,0.5)]"
          >
            <iframe
              title="Mapa de sucursales D'PER"
              src="https://www.google.com/maps?q=22.397739815867087,-97.93632487834957&z=8&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[700px] w-full border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}