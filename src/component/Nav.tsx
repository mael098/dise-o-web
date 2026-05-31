
export default function Nav() {
    const WHATSAPP_URL ='https://wa.me/528332664973?text=Hola%2C%20quiero%20hacer%20un%20pedido%20de%20pastel.'
  return (
    <header className="topbar">
        <a className="brand-mark" href="#inicio">
          <span className="brand-monogram">D</span>
          <span>
            <strong>"[nombre-del-negocio]"</strong>
            <small>Pastelería artesanal</small>
          </span>
        </a>
        <nav className="topnav" aria-label="Principal">
          <a href="#destacados">Destacados</a>
          <a href="#menu">Menú</a>
          <a href="#galeria">Galería</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>
        <a className="btn btn-ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </header>
  )
}
