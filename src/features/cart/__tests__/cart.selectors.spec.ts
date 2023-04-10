import { selectCartItems, selectIsCartEmpty } from '~/features/cart/cart.selectors'
import { initialState as cart } from '~/features/cart/cart.state'
import { type MockStore, setupStore } from '~/test/setup-store'

describe('cart selectors', () => {
  let store: MockStore

  beforeEach(() => {
    store = setupStore({
      preloadedState: {
        cart,
      },
    })
  })

  it('should select cart items', () => {
    const cartItems = selectCartItems(store.getState())

    expect(cartItems).toStrictEqual([])
  })

  it('should get cart is empty', () => {
    const isCartEmpty = selectIsCartEmpty(store.getState())

    expect(isCartEmpty).toBe(true)
  })
})
