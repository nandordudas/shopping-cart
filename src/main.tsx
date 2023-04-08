import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from '~/app/store/store'
import { App } from '~/App'

import './styles/main.css'

const container = document.getElementById('root')!

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
