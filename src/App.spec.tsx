import { App } from '~/App'
import { render, screen, userEvent } from '~/test/test-utils'

describe('App', () => {
  it('should render application properly', () => {
    render(<App />)

    expect(screen.findByText('Vite + React')).toBeTruthy()
  })

  describe('Counter mechanism', () => {
    it('should increment counter', async () => {
      render(<App />)

      let incrementButton = await screen.findByText('count is 0')

      expect(incrementButton).toBeTruthy()

      userEvent.click(incrementButton)

      incrementButton = await screen.findByText('count is 1')

      expect(incrementButton).toBeTruthy()
    })
  })
})
