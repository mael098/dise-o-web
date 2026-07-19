export const BRAND = {
  name: 'D’FER',
  tagline: 'Pastelería artesanal',
  location: 'Altamira, Tamaulipas',
  whatsappNumber: '5218146356315',
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WA_MESSAGE = 'Hola D’FER, quiero hacer un pedido de pastel.'
