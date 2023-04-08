/* eslint-disable import/export */
import { type RenderOptions, render } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import type { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'

import type { RootState, store } from '~/app/store/store'
import { setupStore } from '~/test/setup-store'

interface ExtendedRenderOptions<State extends RootState> extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<State>
  store?: typeof store
}

function customRender(ui: ReactElement, options: RenderOptions = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })
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
export { customRender as render }
