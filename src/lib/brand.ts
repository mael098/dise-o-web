export const BRAND = {
  name: 'D’PER',
  tagline: 'Pastelería artesanal',
  location: 'Altamira, Tamaulipas',
  whatsappNumber: '528332664973',
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WA_MESSAGE = 'Hola D’PER, quiero hacer un pedido de pastel.'
