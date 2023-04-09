import { createSlice } from '@reduxjs/toolkit'

import { getProducts } from './product.thunks'
import { initialState } from './product.state'

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // it has no reducers
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.products = payload
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.isLoading = false
        // @ts-expect-error payload could be ErrorInterfaceWithStatus | ErrorInterface
        state.error = payload!
      })
  },
})
