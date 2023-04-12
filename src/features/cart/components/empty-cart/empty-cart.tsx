import { Link } from 'react-router-dom'

import { ROUTE_PATHS } from '~/app.constants'

export function EmptyCart() {
  return (
    <div>
      <h3>Your cart is empty!</h3>
      <p>
        <span>Please check our </span>
        <Link to={ROUTE_PATHS.PRODUCTS}>
          products
        </Link>
      </p>
    </div>
  )
}
