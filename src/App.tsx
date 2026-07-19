import { useState } from 'react';
import './App.css'
import Catalog from './component/Catalog';
import Hero from './component/Hero';
import Marquee from './component/Marquee';
import Nav from './component/Nav'
import Showcase from './component/Showcase';
import Stats from './component/Stats';
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from './lib/brand';
import Gallery from './component/Gallery';
import Benefits from './component/Benefits';
import Testimonials from './component/Testimonials';
import Location from './component/Location';
import FinalCTA from './component/FinalCTA';
import Footer from './component/Footer';
import OrderBar from './component/OrderBar';
// import Dialog from './component/ui/Dialog';

function App() {
   const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())

  const toggleProduct = (productName: string) => {
    setSelectedProducts((prev) => {
      const next = new Set(prev)
      if (next.has(productName)) {
        next.delete(productName)
      } else {
        next.add(productName)
      }
      return next
    })
  }

  const clearProducts = () => setSelectedProducts(new Set())

  const whatsappUrl =
    selectedProducts.size > 0
      ? buildWhatsAppUrl(
          `Hola, me interesa hacer un pedido de: ${Array.from(selectedProducts).join(', ')}`,
        )
      : buildWhatsAppUrl(DEFAULT_WA_MESSAGE)


  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <Catalog selectedProducts={selectedProducts} toggleProduct={toggleProduct} />
        <Stats />
        <Gallery/>
        <Benefits/>
        <Testimonials/>
        <Location/>
        <FinalCTA/>

      </main>
      <Footer/>
      <OrderBar
      selectedProducts={selectedProducts}
      whatsappUrl={whatsappUrl}
      onClear={clearProducts}
      />
      {/* <Dialog/> */}
    </>
  )
}

export default App
