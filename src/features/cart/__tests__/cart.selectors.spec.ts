import { selectCartItems, selectIsCartEmpty } from '~/features/cart/cart.selectors'
import { initialState as cart } from '~/features/cart/cart.state'

describe('cart selectors', () => {
  it('should select cart items', () => {
    const cartItems = selectCartItems({ cart })

    expect(cartItems).toStrictEqual([])
  })

  it('should get cart is empty', () => {
    const isCartEmpty = selectIsCartEmpty({ cart })

    expect(isCartEmpty).toBe(true)
  })
})
