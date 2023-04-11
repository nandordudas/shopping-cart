import type { AsyncThunk, PreloadedState } from '@reduxjs/toolkit'
import { type RenderOptions, render } from '@testing-library/react'
import type { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'

import type { RootState, store } from '~/app/store/store'
import { setupStore } from '~/test/setup-store'

interface ExtendedRenderOptions<State extends RootState> extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<State>
  store?: typeof store
}

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore({ preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions<RootState> = {},
) {
  const wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>
      {children}
    </Provider>
  )

  return {
    store,
    ...render(ui, {
      wrapper,
      ...renderOptions,
    }),
  }
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

type ThunkArgs<T> = T extends AsyncThunk<infer _Returned, infer ThunkArg, infer _ThunkApiConfig>
  ? ThunkArg
  : never

type ThunkState =
  | 'fulfilled'
  | 'pending'
  | 'rejected'

export function expectThunk<Thunk extends AsyncThunk<any, any, any>>(
  thunk: Thunk,
  args?: ThunkArgs<Thunk>,
  state: ThunkState = 'pending',
) {
  return expect.objectContaining({
    ...(args ? { meta: expect.objectContaining({ arg: args }) } : {}),
    type: thunk[state].type,
  })
}

export function testAction<State, Actions>(
  initialState: State,
  expectedState: State,
  action: Actions,
  reducer: (state: State, action: Actions) => State,
) {
  const actualState = reducer(initialState, action)

  expect(actualState).toEqual(expectedState)
}
