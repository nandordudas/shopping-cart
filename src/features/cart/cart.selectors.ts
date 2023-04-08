import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '~/app/store/store'

function rootSelector(state: RootState) {
  return state.cart
}

export const selectCartItems = createSelector(
  rootSelector,
  state => state.items,
)

export const selectIsCartEmpty = createSelector(
  selectCartItems,
  items => items.length === 0,
)

export const selectTotal = createSelector(
  rootSelector,
  state => state.total.toFixed(2),
)

export const selectAmount = createSelector(
  rootSelector,
  state => state.amount,
)
