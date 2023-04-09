import { type MockStore, setupStore } from '~/test/setup-store'
import { renderWithProviders, screen } from '~/test/test-utils'

import { Cart } from '~/components/cart/Cart'
import { initialState as cart } from '~/features/cart/cart.state'
import { APP_TITLE } from '~/App.constants'

describe('App', () => {
  let store: MockStore

  beforeEach(() => {
    store = setupStore({
      preloadedState: {
        cart,
      },
    })

    renderWithProviders(<Cart />, { store })
  })

  it('should render application properly', () => {
    expect(screen.findByText(APP_TITLE)).toBeTruthy()
  })
})
