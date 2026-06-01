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

// 🍕 Especialidades destacadas de la pizzería
const featuredCakes: Feature[] = [
  {
    name: 'Margarita Especial',
    note: 'Salsa de tomate artesanal, mozzarella fresco, albahaca y aceite de oliva.',
    tag: 'La Clásica',
  },
  {
    name: 'Pepperoni Supremo',
    note: 'Doble porción de pepperoni premium con un toque de especias secretas.',
    tag: 'La Más Vendida',
  },
  {
    name: '4 Quesos Gourmet',
    note: 'Mezcla perfecta de mozzarella, provolone, queso azul y parmesano.',
    tag: 'Premium',
  },
  {
    name: 'Mexicana de la Casa',
    note: 'Chorizo, carne molida, jalapeños, cebolla y un toque de cilantro fresco.',
    tag: 'Especialidad',
  },
]

// 📋 Menú completo con precios reales en MXN
const menuItems: Item[] = [
  {
    name: 'Pizza Pepperoni',
    description: 'Queso mozzarella fundido y rebanadas crujientes de pepperoni.',
    price: '$180',
  },
  {
    name: 'Pizza Hawaiana',
    description: 'La combinación perfecta de jamón seleccionado y piña dulce.',
    price: '$190',
  },
  {
    name: 'Pizza Carnes Frías',
    description: 'Salami, jamón, pepperoni y tocino ahumado sobre salsa de la casa.',
    price: '$230',
  },
  {
    name: 'Pizza Vegetariana',
    description: 'Pimientos, champiñones frescos, cebolla morada y aceitunas negras.',
    price: '$195',
  },
  {
    name: 'Pizza BBQ Chicken',
    description: 'Pollo deshebrado, cebolla caramelizada y nuestra salsa BBQ especial.',
    price: '$220',
  },
  {
    name: 'Paquete Amigos (2 Pizzas)',
    description: '2 pizzas grandes de hasta 2 ingredientes cada una.',
    price: '$340',
  },
  {
    name: 'Papas Gajo Sazonadas',
    description: 'Porción crujiente acompañada de aderezo de la casa.',
    price: '$85',
  },
  {
    name: 'Pizza Personalizada',
    description: 'Elige tu base y combina hasta 4 ingredientes a tu gusto.',
    price: 'Desde $160',
  },
]

// 📸 Fotos de optimizadas desde el CDN de Unsplash para que carguen de volada con temática de pizzería
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
    alt: 'Pizza saliendo del horno con queso derretido.',
  },
  {
    src: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop',
    alt: 'Corte de rebanada de pizza de pepperoni.',
  },
  {
    src: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=600&auto=format&fit=crop',
    alt: 'Mesa con pizzas artesanales listas para compartir.',
  },
  {
    src: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop',
    alt: 'Detalle de ingredientes frescos sobre la masa.',
  },
  {
    src: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=600&auto=format&fit=crop',
    alt: 'Preparación artesanal de la masa de pizza.',
  },
  {
    src: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600&auto=format&fit=crop',
    alt: 'Pizza gourmet con albahaca fresca.',
  },
]

// 📲 URL de WhatsApp actualizada con texto enfocado a Pizzas
const WHATSAPP_URL =
  'https://wa.me/528332664973?text=Hola%2C%20vi%20el%20men%C3%BA%20digital%20y%20quiero%20ordenar%20una%20pizza.'

const serviceHighlights = [
  'Masa artesanal',
  'Ingredientes frescos',
  'Pedidos rápidos',
]

const quickFacts = [
  { value: '100%', label: 'Queso Mozzarella Real' },
  { value: 'Horno', label: 'Sabor tradicional' },
  { value: 'Altamira', label: 'Servicio local y a domicilio' },
]

const visitDetails = [
  'Pedidos listos para recoger en sucursal en 20 minutos.',
  'Servicio a domicilio rápido en la zona de Altamira.',
  'Promociones especiales todos los martes y jueves.',
]

function App() {
  useEffect(() => {
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
            {/* Aquí cambias rápido el nombre por el de la pizzería real al venderla */}
            <h1>"[Nombre de la Pizzería]"</h1>
            <p className="hero-tagline">Sabor artesanal en cada rebanada</p>
            <p className="hero-description">
              Pizzas hechas al momento con masa estirada a mano, salsa secreta de la casa e 
              ingredientes de la más alta calidad para compartir con la familia.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Ordenar por WhatsApp
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
            <p className="eyebrow">Calidad que se nota</p>
            <h2>Masa crujiente, queso derretido</h2>
            <p>
              Desde las combinaciones tradicionales que ya conoces hasta nuestras recetas 
              especiales creadas para sorprender a tu paladar.
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
          <p className="eyebrow">Las favoritas de todos</p>
          <h2>Especialidades destacadas</h2>
          <p className="section-copy">
            Las combinaciones más queridas por nuestros clientes. Preparadas al momento y 
            servidas bien calientes.
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
          <p className="eyebrow">Nuestro Menú</p>
          <h2>Menú Digital</h2>
          <p className="section-copy">
            Elige tu pizza favorita o complementa tu orden con nuestros snacks. ¡Todo directo a tu mesa o domicilio!
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
            <p className="eyebrow">¿Tienes un evento?</p>
            <h3>Pedidos grandes</h3>
            <p>
              Hacemos paquetes especiales para fiestas, reuniones o cumpleaños. Contáctanos con 
              anticipación y nos encargamos de la cena.
            </p>
            <a className="btn btn-outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Cotizar pedido
            </a>
          </aside>
        </div>
      </section>

      <section className="section reveal" id="galeria">
        <div className="section-header">
          <p className="eyebrow">Amor al primer mordisco</p>
          <h2>Galería</h2>
          <p className="section-copy">
            Un vistazo a nuestra cocina y la dedicación que le ponemos a cada pizza que preparamos para ti.
          </p>
        </div>
        <div className="gallery-grid modern-gallery">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className="gallery-card">
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>
                <span>Imagen {index + 1}</span>
                <strong>Pizza Tradición Gourmet</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section reveal location" id="ubicacion">
        <div className="location-copy">
          <p className="eyebrow">Pide o Visítanos</p>
          <h2>Ubicación</h2>
          <p>
            Estamos ubicados en el corazón de Altamira, Tamaulipas. Listos para atenderte en sucursal o llevar el sabor a tu casa.
          </p>
          <p className="address">Pizzería Artesanal · Zona Centro, Altamira, Tamaulipas</p>
          <div className="visit-list">
            {visitDetails.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </div>
        <iframe
          title="Mapa de la Pizzería en Altamira, Tamaulipas"
          src="https://www.google.com/maps?q=Altamira%2C%20Tamaulipas&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="section cta reveal" id="pedido">
        <p className="eyebrow">¿Con hambre?</p>
        <h2>Tu pizza favorita está a un clic de distancia</h2>
        <p>
          Dale clic al botón de abajo, dinos qué especialidad se te antoja y te la preparamos de inmediato. ¡Hacemos envíos rápidos!
        </p>
        <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Ordenar por WhatsApp Ahora
        </a>
      </section>
    </main>
  )
}

export default App