export type Cake = {
  id: number
  name: string
  descripcion: string
  price: string
  image: string
  tag?: string
}

export type CatalogProps = {
  selectedProducts: Set<string>
  toggleProduct: (name: string) => void
}


export type Branches  = {
  name: string,
  lat: number,
  lng: number
}
