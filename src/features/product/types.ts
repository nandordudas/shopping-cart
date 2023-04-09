import type { Entity } from '~/types'

export interface Product extends Entity {
  description: string
  images: string[]
  price: number
  thumbnail: string
  title: string
}

export interface ProductsState {
  isLoading: boolean
  products: Product[]
}

export interface ProductsStateWithError extends ProductsState {
  error: ErrorInterface
}

export interface ErrorInterface {
  message: string
}

export interface ErrorInterfaceWithStatus extends ErrorInterface {
  status: number
}
