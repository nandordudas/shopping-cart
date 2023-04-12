import { useAppDispatch } from '~/app/store/hooks'
import { reset } from '~/features/cart/cart.slice'

import './cart-buttons.css'

export function CartButtons() {
  const dispatch = useAppDispatch()

  return (
    <div className="button-container">
      <button
        className="button clear-cart"
        onClick={() => dispatch(reset())}
      >
        Clear Cart
      </button>
      <button className="button to-checkout">
        Go To Checkout
      </button>
    </div>
  )
}
