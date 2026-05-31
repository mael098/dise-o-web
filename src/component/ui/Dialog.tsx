
import { useRef } from 'react'
import { gsap } from 'gsap'
import './Dialog.css'

export default function Dialog() {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)

  const openDialog = () => {
    const dialog = dialogRef.current
    const card = cardRef.current

    if (!dialog || !card || dialog.open) {
      return
    }

    dialog.showModal()

    gsap.set(dialog, { opacity: 0 })
    gsap.set(card, { y: 42, scale: 0.94, opacity: 0 })

    gsap
      .timeline()
      .to(dialog, {
        opacity: 1,
        duration: 0.22,
        ease: 'power2.out',
      })
      .to(
        card,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.55,
          ease: 'power3.out',
        },
        0,
      )
  }

  const closeDialog = () => {
    const dialog = dialogRef.current
    const card = cardRef.current

    if (!dialog || !card || !dialog.open) {
      return
    }

    gsap
      .timeline({
        onComplete: () => dialog.close(),
      })
      .to(card, {
        y: 28,
        scale: 0.96,
        opacity: 0,
        duration: 0.28,
        ease: 'power2.in',
      })
      .to(
        dialog,
        {
          opacity: 0,
          duration: 0.2,
          ease: 'power1.inOut',
        },
        0.05,
      )
  }

  const closeOnBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      closeDialog()
    }
  }

  return (
    <>
      <button className="open-dialog-btn" onClick={openDialog} type="button">
        Abrir promo especial
      </button>

      <dialog
        ref={dialogRef}
        className="pretty-dialog"
        onCancel={(event) => {
          event.preventDefault()
          closeDialog()
        }}
        onClick={closeOnBackdrop}
      >
        <div ref={cardRef} className="dialog-card" role="document">
          <p className="dialog-eyebrow">Solo esta semana</p>
          <h2>15% OFF en pedidos personalizados</h2>
          <p>
            Reserva tu pastel con diseño especial y recibe descuento para eventos de
            cumpleaños, aniversarios y celebraciones familiares.
          </p>
          <div className="dialog-actions">
            <a
              href="https://wa.me/528332664973?text=Hola%2C%20quiero%20aprovechar%20la%20promo%20del%2015%25"
              target="_blank"
              rel="noreferrer"
              className="dialog-btn dialog-btn-primary"
            >
              Quiero mi promo
            </a>
            <button type="button" className="dialog-btn dialog-btn-ghost" onClick={closeDialog}>
              Cerrar
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
