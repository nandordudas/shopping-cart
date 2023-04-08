import type { Entity } from '~/types'

export interface CartItem extends Entity {
  amount: number
  price: number
  thumbnail: string
  title: string
}
