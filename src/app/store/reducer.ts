import { combineReducers } from '@reduxjs/toolkit'

import { cartSlice } from '~/features/cart/cart.slice'

export const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
})
