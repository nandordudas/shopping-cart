import { Link } from 'react-router-dom'

import { useAppSelector } from '~/app/store/hooks'
import { ROUTE_PATHS } from '~/app.constants'
import { selectAmount } from '~/features/cart/cart.selectors'

import './navbar.css'

export function Navbar() {
  const amount = useAppSelector(selectAmount)

  return (
    <nav className="navbar">
      <Link to={ROUTE_PATHS.PRODUCTS} className="navbar-link">
        Products
      </Link>
      <Link to={ROUTE_PATHS.CART} className="navbar-link">
        Cart ({amount})
      </Link>
    </nav>
  )
}
