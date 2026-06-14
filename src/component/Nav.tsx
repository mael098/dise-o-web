import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { logo } from '../lib/images'
import { BRAND, buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from '../lib/brand'
import { WhatsAppIcon } from './icons'

const links = [
  { href: '#destacados', label: 'Destacados' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const waUrl = buildWhatsAppUrl(DEFAULT_WA_MESSAGE)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-3 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? 'border-border bg-ivory/80 shadow-[0_18px_50px_-24px_rgba(92,68,51,0.4)] backdrop-blur-xl'
            : 'border-transparent bg-ivory/40 backdrop-blur-md'
        }`}
      >
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo || '/placeholder.svg'}
            alt={`Logotipo ${BRAND.name}`}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-accent/40"
          />
          <span className="leading-tight">
            <strong className="block font-serif text-xl tracking-[0.14em] text-primary">
              {BRAND.name}
            </strong>
            <small className="block text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              {BRAND.tagline}
            </small>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-primary/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-ivory/60 text-primary lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-ivory/95 p-4 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-primary/90 transition-colors hover:bg-primary/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir por WhatsApp
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
