import { APP_TITLE } from '~/App.constants'
import { Cart } from '~/components/cart/Cart'
import { Product } from '~/components/product/Product'

import './App.css'

export function App() {
  return (
    <main>
      <h1>{APP_TITLE}</h1>
      <Cart />
      <Product />
    </main>
  )
}
