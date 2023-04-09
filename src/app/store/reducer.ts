import { combineReducers } from '@reduxjs/toolkit'

import { cartSlice } from '~/features/cart/cart.slice'
import { productsSlice } from '~/features/product/product.slice'

export const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
})
