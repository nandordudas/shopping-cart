import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'

function customRender(ui: ReactElement, options: RenderOptions = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
