export type Cake = {
  id: number
  name: string
  descripcion: string
  price: string
  image: string
  tag?: string
}

export const cakes: Cake[] = [
  {
    id: 1,
    name: 'Cake de Piña',
    descripcion:
      'Bizcocho artesanal con dulzura equilibrada y la frescura tropical de la piña natural en cada rebanada.',
    price: '$400',
    image: 'src/assets/pasteles1/WhatsApp Image 2026-06-13 at 3.56.28 PM (1).webp',
    tag: 'El más pedido',
  },
  {
    id: 2,
    name: 'Beso de Ángel',
    descripcion:
      'Capas suaves y aireadas con crema sedosa, un clásico de la casa que se deshace en el paladar.',
    price: '$420',
    image: 'src/assets/pasteles1/WhatsApp Image 2026-06-13 at 3.56.28 PM (2).webp',
    tag: 'Firma D’PER',
  },
  {
    id: 3,
    name: 'Frutas Tres Leches',
    descripcion:
      'Esponjoso tres leches coronado con frutas frescas de temporada y crema batida ligera.',
    price: '$460',
    image: 'src/assets/pasteles1/WhatsApp Image 2026-06-13 at 3.56.28 PM (3).webp',
    tag: 'Fresco',
  },
  {
    id: 4,
    name: 'Cajeta y Plátano',
    descripcion:
      'Combinación reconfortante de cajeta artesanal y plátano caramelizado sobre bizcocho húmedo.',
    price: '$430',
    image: 'src/assets/pasteles1/WhatsApp Image 2026-06-13 at 3.56.28 PM.webp',
    tag: 'Premium',
  },
  {
    id: 5,
    name: 'Rosquita de Durazno',
    descripcion:
      'Delicada rosca rellena de durazno en almíbar con un acabado suave y elegante.',
    price: '$410',
    image: 'src/assets/pasteles1/WhatsApp Image 2026-06-13 at 3.56.29 PM (1).webp',
    tag: 'Temporada',
  },
  {
    id: 6,
    name: 'Carlota de Limón Tres Leches',
    descripcion:
      'Frescura cítrica y textura cremosa en una carlota tres leches irresistiblemente ligera.',
    price: '$450',
    image: 'src/assets/pasteles1/WhatsApp Image 2026-06-13 at 3.56.29 PM (2).webp',
    tag: 'Fresco',
  },
  {
    id: 7,
    name: 'Beso de Ángel Oreo',
    descripcion:
      'Nuestra firma Beso de Ángel con un toque crujiente de galleta Oreo y crema sedosa.',
    price: '$470',
    image: 'src/assets/pasteles1/WhatsApp Image 2026-06-13 at 3.56.29 PM (3).webp',
    tag: 'Premium',
  },
  {
    id: 8,
    name: 'Napolitano',
    descripcion:
      'Tres sabores clásicos en perfecta armonía, decorado con un acabado pulcro y moderno.',
    price: '$440',
    image: 'src/assets/pasteles1/WhatsApp Image 2026-06-13 at 3.56.29 PM.webp',
    tag: 'Clásico',
  },
]
