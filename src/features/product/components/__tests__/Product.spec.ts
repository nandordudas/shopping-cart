import { initialState as product } from '~/features/product/product.state'
import { getProductsThunk } from '~/features/product/product.thunks'
import { type MockStore, setupStore } from '~/test/setup-store'
import { expectThunk } from '~/test/test-utils'

describe('Product', () => {
  let store: MockStore

  beforeEach(() => {
    store = setupStore({
      preloadedState: {
        product,
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
