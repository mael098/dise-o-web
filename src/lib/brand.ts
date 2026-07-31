export const BRAND = {
  name: 'D’FER',
  tagline: 'Pastelería artesanal',
  location: 'Altamira, Tamaulipas',
  email: 'haciendadfer555@gmail.com',
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WA_MESSAGE = 'Hola D’FER, quiero hacer un pedido de pastel.'
