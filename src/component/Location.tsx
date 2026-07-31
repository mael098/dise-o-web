import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'
import { SectionHeading } from './ui/Primitives'
import { MapPinIcon, ClockIcon, CheckIcon, WhatsAppIcon, FacebookIcon } from './icons'
import { branches } from '../data/branches'
import { useBranch } from '../lib/branch-context'
import { buildWhatsAppUrl } from '../lib/brand'

const points = [
  'Atención personalizada para pedidos y cotizaciones.',
  'Opciones para cumpleaños, mesas dulces y regalos.',
  'Entregas coordinadas dentro de la región.',
]

export default function Location() {
  const { branch } = useBranch()
  const mapSrc = `https://www.google.com/maps?q=${branch.lat},${branch.lng}&z=13&output=embed`
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

            <div className="mt-6 space-y-4">
              {branches.map((b) => {
                const active = b.name === branch.name
                return (
                  <div
                    key={b.name}
                    className={`rounded-2xl border p-5 transition-all hover:shadow-md ${
                      active
                        ? 'border-accent bg-accent/10 shadow-[0_16px_40px_-22px_rgba(200,163,91,0.7)]'
                        : 'border-border bg-sand/40'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <MapPinIcon className={`mt-1 h-5 w-5 shrink-0 ${active ? 'text-accent' : 'text-accent'}`} />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-primary">
                          {b.name}
                          {active ? (
                            <span className="ml-2 inline-flex rounded-full bg-accent/20 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent-foreground">
                              Seleccionada
                            </span>
                          ) : null}
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          {b.address}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <a
                            href={`https://www.google.com/maps?q=${b.lat},${b.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-xl bg-accent px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
                          >
                            <MapPinIcon className="h-3 w-3" />
                            Ver ubicación
                          </a>
                          <a
                            href={buildWhatsAppUrl(b.whatsapp ?? '', `Hola D'FER ${b.name}, quiero hacer un pedido.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                          >
                            <WhatsAppIcon className="h-3 w-3" />
                            {b.phone}
                          </a>
                          {b.facebook ? (
                            <a
                              href={b.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-xl border border-border bg-ivory/60 px-3 py-1.5 text-xs font-medium text-primary transition-opacity hover:opacity-80"
                            >
                              <FacebookIcon className="h-3 w-3" />
                              Facebook
                            </a>
                          ) : null}
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                          <ClockIcon className="h-3.5 w-3.5 shrink-0 text-accent" />
                          <span>{b.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
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
              key={branch.name}
              title={`Mapa de la sucursal ${branch.name} — D'PER`}
              src={mapSrc}
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