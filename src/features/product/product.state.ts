import type { Product, ProductState, ProductStateWithError } from './types'

export const initialState: ProductState<Product> & ProductStateWithError = {
  isLoading: true,
  error: null,
  products: [],
}
