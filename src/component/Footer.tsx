import { logo } from '../lib/images'
import { BRAND, buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/brand'
import { InstagramIcon, FacebookIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from './icons'

const nav = [
  { href: '#destacados', label: 'Destacados' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src={logo || '/placeholder.svg'}
                alt={`Logotipo ${BRAND.name}`}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-accent/40"
              />
              <span className="leading-tight">
                <strong className="block font-serif text-2xl tracking-[0.12em] text-primary">
                  {BRAND.name}
                </strong>
                <small className="block text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  {BRAND.tagline}
                </small>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Pastelería artesanal con alma y diseño. Creamos sabores memorables para acompañar
              tus momentos más especiales.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
                { Icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
                {
                  Icon: WhatsAppIcon,
                  label: 'WhatsApp',
                  href: buildWhatsAppUrl(DEFAULT_WA_MESSAGE),
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegación del pie">
            <h3 className="font-serif text-lg text-primary">Explora</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-serif text-lg text-primary">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Zona Centro, Altamira, Tamaulipas
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Lun a Sáb · 9:00 – 20:00
              </li>
              <li className="flex items-start gap-2.5">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  +52 833 266 4973
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted">
            © {year} {BRAND.name} Pastelería. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted">Hecho con dedicación artesanal en Altamira.</p>
        </div>
      </div>
    </footer>
  )
}
