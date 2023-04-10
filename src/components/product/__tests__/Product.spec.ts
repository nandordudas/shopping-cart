import { type MockStore, setupStore } from '~/test/setup-store'
import { expectThunk } from '~/test/test-utils'

import { initialState as products } from '~/features/product/product.state'
import { getProductsThunk } from '~/features/product/product.thunks'

describe('Product', () => {
  let store: MockStore

  beforeEach(() => {
    store = setupStore({
      preloadedState: {
        products,
      },
    })
  })

  it('should fetch products', async () => {
    const expectedThunks = [
      expectThunk(getProductsThunk),
      expectThunk(getProductsThunk, undefined, 'fulfilled'),
    ]

    await store.dispatch(getProductsThunk())

    expect(store.getActions()).toEqual(expectedThunks)
  })
})
