import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { initialState } from './cart.state'
import type { CartItem } from './types'
import type { Entity } from '~/types'

interface ChangeAmountProps extends Entity {
  method: 'decrease' | 'increase'
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartItem>) => {
      const cartItem = state.items.find(item => item.id === payload.id)

      if (cartItem) {
        cartItem.amount += 1

        return
      }

      state.items = [
        ...state.items,
        payload,
      ]
    },
    reset: () => {
      return {
        ...initialState,
      }
    },
    changeAmount: (state, { payload }: PayloadAction<ChangeAmountProps>) => {
      const cartItem = state.items.find(item => item.id === payload.id)

      if (!cartItem)
        return

      let delta = 1

      if (payload.method === 'increase')
        delta *= 1
      else if (payload.method === 'decrease')
        delta *= -1

      cartItem.amount += delta
    },
    removeItemFromCart: (state, { payload }: PayloadAction<Entity>) => {
      state.items = state.items.filter(item => item.id !== payload.id)
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0

      state.items.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })

      state.amount = amount
      state.total = total
    },
  },
})

export const {
  addToCart,
  calculateTotal,
  changeAmount,
  removeItemFromCart,
  reset,
} = cartSlice.actions
