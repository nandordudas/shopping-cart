import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '~/app/store/store'

function rootSelector(state: RootState) {
  return state.product
}

export const selectIsProductLoading = createSelector(
  rootSelector,
  state => state.isLoading,
)

export const selectProducts = createSelector(
  rootSelector,
  state => state.products,
)
