import { type CombinedState, type Middleware, type PreloadedState } from '@reduxjs/toolkit'
import configureStore from 'redux-mock-store'
import { thunk } from 'redux-thunk'

import { type RootState, store } from '~/app/store/store'

import type { Actions } from './types'

interface ExtendedStoreOptions<State extends CombinedState<unknown>> {
  preloadedState?: PreloadedState<State>
  middlewares?: Middleware[]
  initialState?: State
}

export function setupStore<State, Actions>({
  preloadedState,
  middlewares = [thunk],
  initialState = store.getState(),
}: ExtendedStoreOptions<RootState> = {}) {
  const createStore = configureStore<State, Actions>(middlewares)

  const store = createStore({
    ...initialState as State,
    ...preloadedState,
  })

  return store
}

export type MockStore = ReturnType<typeof setupStore<RootState, Actions>>
