import { createSlice } from '@reduxjs/toolkit'

import { getProductsThunk } from './product.thunks'
import { initialState } from './product.state'

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // it has no reducers
  },
  extraReducers(builder) {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.products = payload
      })
      .addCase(getProductsThunk.rejected, (state, { payload }) => {
        state.isLoading = false
        // @ts-expect-error payload could be ErrorInterfaceWithStatus | ErrorInterface
        state.error = payload!
      })
  },
})

export type ProductActions =
  | ReturnType<typeof productsSlice.actions[keyof typeof productsSlice.actions]>
