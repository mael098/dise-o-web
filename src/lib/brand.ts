export const BRAND = {
  name: 'D’Fer',
  tagline: 'Pastelería artesanal',
  location: 'Altamira, Tamaulipas',
  whatsappNumber: '52 1 81 4635 6315',
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WA_MESSAGE = 'Hola D’FER, quiero hacer un pedido de pastel.'
