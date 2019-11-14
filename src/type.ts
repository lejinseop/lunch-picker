export interface Menu {
  name: string
  price: number
}

export interface Restaurant {
  name: string
  menus: Menu[]
}
