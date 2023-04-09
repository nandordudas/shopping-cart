import type { ProductsState, ProductsStateWithError } from './types'

export const initialState: ProductsState | ProductsStateWithError = {
  isLoading: true,
  error: {
    message: '',
  },
  products: [],
}
