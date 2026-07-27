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
    price: '$320',
    image: 'cake piña.webp',
    tag: 'El más pedido',
  },
  {
    id: 2,
    name: 'Beso de Ángel',
    descripcion:
      'Capas suaves y aireadas con crema sedosa, un clásico de la casa que se deshace en el paladar.',
    price: '$435',
    image: 'beso angel.webp',
    tag: "Firma D'PER",
  },
  {
    id: 3,
    name: 'Frutas Tres Leches',
    descripcion:
      'Esponjoso tres leches coronado con frutas frescas de temporada y crema batida ligera.',
    price: '$395',
    image: 'frutas 3L.webp',
    tag: 'Fresco',
  },
  {
    id: 4,
    name: 'Cajeta y Plátano',
    descripcion:
      'Combinación reconfortante de cajeta artesanal y plátano caramelizado sobre bizcocho húmedo.',
    price: '$395',
    image: 'cajeta platano.webp',
    tag: 'Premium',
  },
  {
    id: 5,
    name: 'Rosca de Durazno',
    descripcion:
      'Delicada rosca rellena de durazno en almíbar con un acabado suave y elegante.',
    price: '$350',
    image: 'rosquita durazno.webp',
    tag: 'Temporada',
  },
  {
    id: 6,
    name: 'Carlota de Beso Limón',
    descripcion:
      'Frescura cítrica y textura cremosa en una carlota tres leches irresistiblemente ligera.',
    price: '$545',
    image: 'beso angel carlota limon.webp',
    tag: 'Fresco',
  },
  {
    id: 7,
    name: 'Beso de Ángel Oreo',
    descripcion:
      'Nuestra firma Beso de Ángel con un toque crujiente de galleta Oreo y crema sedosa.',
    price: '$435',
    image: 'beso angel oreo.webp',
    tag: 'Premium',
  },
  {
    id: 8,
    name: 'Napolitano',
    descripcion:
      'Tres sabores clásicos en perfecta armonía, decorado con un acabado pulcro y moderno.',
    price: '$435',
    image: 'napolitano.webp',
    tag: 'Clásico',
  },
  {
    id: 9,
    name: 'Rollo Tres Leches',
    descripcion:
      'Tres leches enrollado con relleno cremoso, una presentación diferente y deliciosa.',
    price: '$450',
    image: '',
    tag: 'Especial',
  },
  {
    id: 10,
    name: 'Chococereza',
    descripcion:
      'Intenso pastel de chocolate con cerezas, una combinación clásica que nunca falla.',
    price: '$395',
    image: '',
    tag: 'Especial',
  },
  {
    id: 11,
    name: 'Vainilla Fresa',
    descripcion:
      'Suave vainilla con fresas frescas, un binomio perfecto para los amantes de lo dulce y fresco.',
    price: '$350',
    image: '',
    tag: 'Fresco',
  },
  {
    id: 12,
    name: 'Cajeta Fresa',
    descripcion:
      'Cajeta artesanal combinada con fresas frescas, dulzura y frescura en cada bocado.',
    price: '$395',
    image: '',
    tag: 'Especial',
  },
  {
    id: 13,
    name: 'Carlota Limón',
    descripcion:
      'Fresca carlota de limón con textura cremosa y sabor cítrico refrescante.',
    price: '$395',
    image: '',
    tag: 'Fresco',
  },
  {
    id: 14,
    name: 'Chocolate',
    descripcion:
      'Intenso pastel de chocolate con textura esponjosa y sabor profundo que conquista a los amantes del cacao.',
    price: '$290',
    image: '',
    tag: 'Clásico',
  },
  {
    id: 15,
    name: 'Capuchino',
    descripcion:
      'Delicado pastel con notas de café capuchino, ideal para los que disfrutan un sabor sofisticado.',
    price: '$320',
    image: '',
    tag: 'Especial',
  },
  {
    id: 16,
    name: 'Almendras 1kg',
    descripcion:
      'Pastel elaborado con almendras naturales, textura única y sabor aromático que lo hace inigualable.',
    price: '$595',
    image: '',
    tag: 'Premium',
  },
  {
    id: 17,
    name: 'Tres Leches Tradicional Mediano',
    descripcion:
      'El clásico tres leches de toda la vida, esponjoso y jugoso, en tamaño mediano perfecto para compartir.',
    price: '$310',
    image: '',
    tag: 'Clásico',
  },
  {
    id: 18,
    name: 'Tres Leches Tradicional 1kg',
    descripcion:
      'Nuestro icónico tres leches en tamaño familiar de 1kg, para celebraciones grandes.',
    price: '$595',
    image: '',
    tag: 'Familiar',
  },
  {
    id: 19,
    name: 'Chocoflan',
    descripcion:
      'La combinación perfecta de pastel de chocolate y flan cremoso en una sola capa irresistible.',
    price: '$300',
    image: '',
    tag: 'Especial',
  },
  {
    id: 20,
    name: 'Zanahoria',
    descripcion:
      'Pastel de zanahoria artesanal con especias suaves, húmedo y lleno de sabor.',
    price: '$350',
    image: '',
    tag: 'Especial',
  },
  {
    id: 21,
    name: 'Sin Azúcar',
    descripcion:
      'Pastel preparado sin azúcar añadida, para quienes buscan disfrutar sin preocupaciones.',
    price: '$295',
    image: '',
    tag: 'Especial',
  },
  {
    id: 22,
    name: 'Vainilla',
    descripcion:
      'Suave y aromático pastel de vainilla, un favorito universal para todas las edades.',
    price: '$290',
    image: '',
    tag: 'Clásico',
  },
  {
    id: 23,
    name: 'Gitano',
    descripcion:
      'Pastel gitano con relleno de frutas y un toque especial que lo hace único en sabor.',
    price: '$320',
    image: '',
    tag: 'Temporada',
  },
  {
    id: 24,
    name: 'Malteada Fresa',
    descripcion:
      'Pastel con sabor a malteada de fresa, cremoso y refrescante, ideal para los más jóvenes.',
    price: '$395',
    image: '',
    tag: 'Especial',
  },
  {
    id: 25,
    name: 'Moka',
    descripcion:
      'Pastel con notas de café moka, perfecto para los amantes del café con un toque dulce.',
    price: '$395',
    image: '',
    tag: 'Especial',
  },
  {
    id: 26,
    name: 'Piña Coco',
    descripcion:
      'Combinación tropical de piña y coco, un pastel fresco y lleno de sabor caribeño.',
    price: '$380',
    image: '',
    tag: 'Fresco',
  },
  {
    id: 27,
    name: 'Cheesecake',
    descripcion:
      'Nuestro cheesecake artesanal, cremoso y suave con la textura perfecta en cada porción.',
    price: '$550',
    image: '',
    tag: 'Premium',
  },
  {
    id: 28,
    name: 'Tres Leches Chocolate Abuelita',
    descripcion:
      'Tres leches con el sabor nostálgico del chocolate Abuelita, un clásico mexicano reinventado.',
    price: '',
    image: '',
    tag: 'Especial',
  },
  {
    id: 29,
    name: 'Doble Chocolate',
    descripcion:
      'Para los verdaderos amantes del chocolate, doble porción de cacao en cada capa.',
    price: '',
    image: '',
    tag: 'Premium',
  },
  {
    id: 30,
    name: 'Panqué de Nuez',
    descripcion:
      'Suave panqué con nueces crujientes, ideal para acompañar el café de la tarde.',
    price: '$95',
    image: '',
    tag: 'Clásico',
  },
]
