import type { CartActions } from '~/features/cart/cart.slice'
import type { ProductActions } from '~/features/product/product.slice'

export type Actions =
  | CartActions
  | ProductActions
