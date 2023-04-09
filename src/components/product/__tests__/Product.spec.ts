import type { AnyAction } from '@reduxjs/toolkit'
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

  it.todo('should fetch products', async () => {
    const expectedThunks = [
      expectThunk(getProductsThunk),
      expectThunk(getProductsThunk, undefined, 'fulfilled'),
    ]

    store.dispatch(getProductsThunk() as unknown as AnyAction)

    expect(store.getActions()).toEqual(expectedThunks)
  })
})
