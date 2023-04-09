import {
  addToCart,
  calculateTotal,
  cartSlice,
  changeAmount,
  removeItemFromCart,
  reset,
} from '~/features/cart/cart.slice'
import type { CartItem } from '~/features/cart/types'
import { initialState as cart } from '~/features/cart/cart.state'

const mockCartItem: CartItem = {
  amount: 1,
  id: '_id_',
  price: 1,
  thumbnail: '_thumbnail_',
  title: '_title_',
}

describe('cart reducer', () => {
  it('should add item to cart', () => {
    const actualState = cartSlice.reducer(cart, addToCart(mockCartItem))

    expect(actualState.items.at(0)).toBeTruthy()
    expect(actualState.items.at(0)!.amount).toEqual(1)
  })

  it('should reset cart', async () => {
    const actualState = cartSlice.reducer({
      ...cart,
      amount: 1,
    }, reset())

    expect(actualState.amount).toEqual(0)
  })

  it('should change cart item amount', () => {
    const actualState = cartSlice.reducer({
      ...cart,
      items: [
        ...cart.items,
        mockCartItem,
      ],
    }, changeAmount({ id: mockCartItem.id, method: 'increase' }))

    expect(actualState.items.at(0)).toBeTruthy()
    expect(actualState.items.at(0)!.amount).toEqual(2)
  })

  it('should remove item from cart', () => {
    const actualState = cartSlice.reducer({
      ...cart,
      items: [
        ...cart.items,
        mockCartItem,
      ],
    }, removeItemFromCart({ id: mockCartItem.id }))

    expect(actualState.items.length).toEqual(0)
  })

  it('should calculate cart total', () => {
    const actualState = cartSlice.reducer({
      ...cart,
      items: [
        ...cart.items,
        mockCartItem,
      ],
    }, calculateTotal())

    expect(actualState.amount).toEqual(1)
    expect(actualState.total).toEqual(1)
  })
})
