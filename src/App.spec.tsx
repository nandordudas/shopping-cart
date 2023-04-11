import { App } from '~/App'
import { APP_TITLE } from '~/App.constants'
import { initialState as cart } from '~/features/cart/cart.state'
import { initialState as product } from '~/features/product/product.state'
import { type MockStore, setupStore } from '~/test/setup-store'
import { renderWithProviders, screen } from '~/test/test-utils'

describe('App', () => {
  it('should render application properly', () => {
    const store: MockStore = setupStore({
      preloadedState: {
        cart,
        product,
      },
    })

    renderWithProviders(<App />, { store })

    expect(screen.findByText(APP_TITLE)).toBeTruthy()
  })
})
