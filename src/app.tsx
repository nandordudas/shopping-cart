import { Route, Routes } from 'react-router'

import { ROUTE_PATHS } from './app.constants'
import { Welcome } from './components/welcome/welcome'
import { Cart } from './features/cart/components/cart'
import { ProductList } from './features/product/components/product-list/product-list'

import './app.css'

export function App() {
  return (
    <main>
      <Routes>
        <Route path={ROUTE_PATHS.HOME} element={<Welcome />}/>
        <Route path={ROUTE_PATHS.PRODUCTS} element={<ProductList />}/>
        <Route path={ROUTE_PATHS.CART} element={<Cart />}/>
      </Routes>
    </main>
  )
}
