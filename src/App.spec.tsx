import { type MockStore, setupStore } from '~/test/setup-store'
import { renderWithProviders, screen } from '~/test/test-utils'

import { initialState as products } from '~/features/product/product.state'
import { initialState as cart } from '~/features/cart/cart.state'
import { APP_TITLE } from '~/App.constants'
import { App } from '~/App'

describe('App', () => {
  it('should render application properly', () => {
    const store: MockStore = setupStore({
      preloadedState: {
        cart,
        products,
      },
    })

    renderWithProviders(<App />, { store })

    expect(screen.findByText(APP_TITLE)).toBeTruthy()
  })
})
