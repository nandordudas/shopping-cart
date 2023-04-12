import type { cartSlice } from '~/features/cart/cart.slice'
import type { productsSlice } from '~/features/product/product.slice'
import type { getProductsThunk } from '~/features/product/product.thunks'

type CartActions = ReturnType<typeof cartSlice.actions[keyof typeof cartSlice.actions]>

type ProductActions =
  | ReturnType<typeof productsSlice.actions[keyof typeof productsSlice.actions]>
  | typeof getProductsThunk

export type Actions =
  | CartActions
  | ProductActions
