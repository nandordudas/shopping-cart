import type { CartItem } from './types'

export interface CartState<Item extends object> {
  amount: number
  items: Item[]
  isLoading: boolean
  total: number
}

export const initialState: CartState<CartItem> = {
  amount: 0,
  items: [],
  isLoading: true,
  total: 0,
}
