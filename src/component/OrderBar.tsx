import { AnimatePresence, motion } from 'framer-motion'
import { WhatsAppIcon } from './icons'

type OrderBarProps = {
  selectedProducts: Set<string>
  whatsappUrl: string
  onClear: () => void
}

export default function OrderBar({ selectedProducts, whatsappUrl, onClear }: OrderBarProps) {
  const count = selectedProducts.size
  return (
    <AnimatePresence>
      {count > 0 ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          className="fixed inset-x-0 bottom-4 z-50 px-3 sm:bottom-6 sm:px-6"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-3xl border border-border bg-ivory/90 p-3 shadow-[0_24px_60px_-20px_rgba(92,68,51,0.5)] backdrop-blur-xl sm:flex-row sm:gap-4 sm:p-3.5">
            <div className="flex w-full items-center gap-3 sm:w-auto sm:flex-1">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-lg font-bold text-primary-foreground">
                {count}
              </span>
              <p className="min-w-0 text-sm text-primary">
                <span className="font-semibold">
                  {count === 1 ? 'pastel seleccionado' : 'pasteles seleccionados'}
                </span>
                <span className="block truncate text-xs text-muted">
                  {Array.from(selectedProducts).join(', ')}
                </span>
              </p>
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <button
                type="button"
                onClick={onClear}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                Limpiar
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:flex-none"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Enviar pedido
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
