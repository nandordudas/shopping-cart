import type { Entity } from '~/types'

export interface Product extends Entity {
  description: string
  images: string[]
  price: number
  thumbnail: string
  title: string
}

export interface ProductState<Item extends object> {
  isLoading: boolean
  products: Item[]
}

export interface ErrorInterface {
  message: string
}

export interface ErrorInterfaceWithStatus extends ErrorInterface {
  status: number
}

export interface ProductStateWithError extends ProductState<Product> {
  error: ErrorInterfaceWithStatus | null
}
