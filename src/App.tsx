import { Cart } from '~/components/cart/Cart'
import { APP_TITLE } from '~/App.constants'

import './App.css'

export function App() {
  return (
    <main>
      <h1>{APP_TITLE}</h1>
      <Cart />
    </main>
  )
}
