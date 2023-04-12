import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '~/app/store/store'

import { currencyFormatter } from './utils/curency-formatter'

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
  state => currencyFormatter.format(state.total),
)

export const selectAmount = createSelector(
  rootSelector,
  state => state.amount,
)
