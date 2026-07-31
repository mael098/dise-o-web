import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useBranch } from '../lib/branch-context'
import { branches } from '../data/branches'
import { CheckIcon, ChevronDownIcon, MapPinIcon } from './icons'

export default function BranchSelector() {
  const { branch, setBranch } = useBranch()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Sucursal seleccionada: ${branch.name}`}
        className="flex items-center gap-1.5 rounded-full border border-border bg-ivory/70 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent/60 sm:gap-2 sm:px-4"
      >
        <MapPinIcon className="h-4 w-4 shrink-0 text-accent" />
        <span className="hidden max-w-[8rem] truncate sm:block">{branch.name}</span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            role="listbox"
            aria-label="Elegir sucursal"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-border bg-ivory/95 p-2 shadow-[0_24px_60px_-20px_rgba(92,68,51,0.4)] backdrop-blur-xl"
          >
            <li className="px-3 pb-1.5 pt-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted">
              Elige tu sucursal
            </li>
            {branches.map((b) => {
              const active = b.name === branch.name
              return (
                <li key={b.name}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setBranch(b.name)
                      setOpen(false)
                    }}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                      active
                        ? 'bg-accent/15 text-primary'
                        : 'text-primary/80 hover:bg-primary/5'
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate">{b.name}</span>
                      <span className="block truncate text-xs text-muted">{b.address}</span>
                    </span>
                    {active ? <CheckIcon className="h-4 w-4 shrink-0 text-accent" /> : null}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
