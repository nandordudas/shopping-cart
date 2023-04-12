import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from '~/app'
import { store } from '~/app/store/store'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

import './styles/main.css'

const container = document.getElementById('root')!

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
