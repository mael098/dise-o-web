import { useEffect } from 'react'
import './App.css'
import Nav from './component/Nav';
import Dialog from './component/ui/Dialog'

type Item = {
  name: string
  description: string
  price: string
}

type Feature = {
  name: string
  note: string
  tag: string
}

const featuredCakes: Feature[] = [
  {
    name: 'Tres Leches Clásico',
    note: 'Suave, fresco y con crema batida ligera.',
    tag: 'El más pedido',
  },
  {
    name: 'Chocolate Intenso',
    note: 'Cacao premium y ganache sedosa.',
    tag: 'Premium',
  },
  {
    name: 'Girasol Vainilla',
    note: 'Decoración artesanal con flores de buttercream.',
    tag: 'Firma D’PER',
  },
  {
    name: 'Limón de la Casa',
    note: 'Cítrico equilibrado con toque cremoso.',
    tag: 'Fresco',
  },
]

const menuItems: Item[] = [
  {
    name: 'Pastel Tres Leches',
    description: 'Bizcocho esponjoso bañado en tres leches y crema fresca.',
    price: '$480',
  },
  {
    name: 'Pastel Chocolate Belga',
    description: 'Capas húmedas de chocolate oscuro con relleno de ganache.',
    price: '$520',
  },
  {
    name: 'Pastel de Limón',
    description: 'Mousse cítrica, cobertura brillante y base suave de vainilla.',
    price: '$470',
  },
  {
    name: 'Pastel Red Velvet',
    description: 'Textura aterciopelada con crema de queso ligeramente dulce.',
    price: '$510',
  },
  {
    name: 'Cheesecake Artesanal',
    description: 'Horneado lento con coulis de frutos rojos.',
    price: '$450',
  },
  {
    name: 'Caja Mini Reposteria (12 pzas)',
    description: 'Selección de mini tartaletas, brownies y roles.',
    price: '$390',
  },
  {
    name: 'Cupcakes Boutique (6 pzas)',
    description: 'Decoración premium ideal para regalo y eventos pequeños.',
    price: '$240',
  },
  {
    name: 'Pastel Personalizado',
    description: 'Diseño y sabor a elección para celebraciones especiales.',
    price: 'Desde $650',
  },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1000&q=80',
    alt: 'Pastel artesanal con frutas frescas y crema.',
  },
  {
    src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1000&q=80',
    alt: 'Rebanadas de pastel decoradas en vitrina elegante.',
  },
  {
    src: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1000&q=80',
    alt: 'Mesa de cafeteria boutique con pastel y cafe.',
  },
  {
    src: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=1000&q=80',
    alt: 'Pastel decorado con estilo premium en tonos crema.',
  },
  {
    src: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&w=1000&q=80',
    alt: 'Pasteleria artesanal con diferentes opciones de postres.',
  },
  {
    src: 'https://images.unsplash.com/photo-1461009312844-e80697a81cc7?auto=format&fit=crop&w=1000&q=80',
    alt: 'Detalle de glaseado y decoracion de pastel.',
  },
]

const WHATSAPP_URL =
  'https://wa.me/528331234567?text=Hola%20D%E2%80%99PER%2C%20quiero%20hacer%20un%20pedido%20de%20pastel.'

const serviceHighlights = [
  'Recetas artesanales',
  'Decoración personalizada',
  'Pedidos para eventos',
]

const quickFacts = [
  { value: '+80', label: 'Pedidos especiales por mes' },
  { value: '100%', label: 'Hecho con dedicación artesanal' },
  { value: 'Altamira', label: 'Atención local y cercana' },
]

const visitDetails = [
  'Atención personalizada para pedidos y cotizaciones.',
  'Opciones para cumpleaños, mesas dulces y regalos.',
  'Entregas coordinadas dentro de Altamira y alrededores.',
]

function App() {
  useEffect(() => {
    // Detecta elementos al entrar en viewport para animar secciones en scroll.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2 },
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="page-shell">
     <Nav/>
     <Dialog />

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Altamira, Tamaulipas</p>
            <h1>D'FEER</h1>
            <p className="hero-tagline">Pasteles que saben a hogar</p>
            <p className="hero-description">
              Una pastelería con alma artesanal, estética elegante y sabores pensados para
              acompañar momentos especiales con calidez.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Pedir por WhatsApp
              </a>
              <a className="btn btn-secondary-light" href="#menu">
                Ver menú completo
              </a>
            </div>
            <div className="hero-badges" aria-label="Servicios principales">
              {serviceHighlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>

          <aside className="hero-panel reveal is-visible">
            <p className="eyebrow">Experiencia boutique</p>
            <h2>Diseños cuidados, sabor memorable</h2>
            <p>
              Desde pasteles clásicos hasta pedidos personalizados, cada creación busca verse
              refinada y sentirse cercana.
            </p>
            <div className="hero-facts">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="fact-card">
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section reveal" id="destacados">
        <div className="section-header">
          <p className="eyebrow">Favoritos de la casa</p>
          <h2>Productos destacados</h2>
          <p className="section-copy">
            Sabores con presencia visual y balance casero: pensados para regalar, celebrar o
            simplemente consentirte.
          </p>
        </div>
        <div className="featured-grid">
          {featuredCakes.map((cake, index) => (
            <article key={cake.name} className="featured-card">
              <span className="card-index">0{index + 1}</span>
              <p className="feature-tag">{cake.tag}</p>
              <h3>{cake.name}</h3>
              <p>{cake.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="menu">
        <div className="section-header">
          <p className="eyebrow">Carta completa</p>
          <h2>Menú D'PER</h2>
          <p className="section-copy">
            Pasteles, cajas dulces y opciones personalizadas con una presentación limpia y
            premium accesible.
          </p>
        </div>
        <div className="menu-layout">
          <div className="menu-list">
            {menuItems.map((item) => (
              <article key={item.name} className="menu-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <span>{item.price}</span>
              </article>
            ))}
          </div>
          <aside className="menu-note">
            <p className="eyebrow">Pedidos a medida</p>
            <h3>Hazlo personal</h3>
            <p>
              Diseñamos pasteles para cumpleaños, aniversarios, regalos y eventos con acabados
              cuidados y sabores clásicos que siempre funcionan.
            </p>
            <a className="btn btn-outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Cotizar pedido
            </a>
          </aside>
        </div>
      </section>

      <section className="section reveal" id="galeria">
        <div className="section-header">
          <p className="eyebrow">Inspiración dulce</p>
          <h2>Galería</h2>
          <p className="section-copy">
            Una selección visual que mezcla acabados delicados, atmósfera acogedora y una
            identidad pensada para antojar desde el primer vistazo.
          </p>
        </div>
        <div className="gallery-grid modern-gallery">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className="gallery-card">
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>
                <span>Escena {index + 1}</span>
                <strong>D’PER Signature Mood</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section reveal location" id="ubicacion">
        <div className="location-copy">
          <p className="eyebrow">Visítanos</p>
          <h2>Ubicación</h2>
          <p>
            Estamos en Altamira, Tamaulipas. Te esperamos para probar nuestros pasteles
            artesanales recién hechos.
          </p>
          <p className="address">D'PER Pastelería · Zona Centro, Altamira, Tamaulipas</p>
          <div className="visit-list">
            {visitDetails.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>
        <iframe
          title="Mapa de D'PER en Altamira, Tamaulipas"
          src="https://www.google.com/maps?q=Altamira%2C%20Tamaulipas&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="section cta reveal" id="pedido">
        <p className="eyebrow">Haz tu pedido hoy</p>
        <h2>Tu próximo pastel favorito te está esperando</h2>
        <p>
          Escríbenos por WhatsApp y aparta tu pedido personalizado para cumpleaños,
          aniversarios o cualquier momento especial.
        </p>
        <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Enviar mensaje ahora
        </a>
      </section>
    </main>
  )
}

export default App
