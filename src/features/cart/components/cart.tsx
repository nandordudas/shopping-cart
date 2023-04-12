import { useAppSelector } from '~/app/store/hooks'
import { selectCartItems, selectIsCartEmpty, selectTotal } from '~/features/cart/cart.selectors'

import { CartButtons } from './cart-buttons/cart-buttons'
import { CartItem } from './cart-item/cart-item'
import { EmptyCart } from './empty-cart/empty-cart'

import './cart.css'

export function Cart() {
  const total = useAppSelector(selectTotal)
  const cartItems = useAppSelector(selectCartItems)
  const isCartEmpty = useAppSelector(selectIsCartEmpty)

  if (isCartEmpty) {
    return (
      <section className="cart">
        <h2>Your cart</h2>
        <EmptyCart />
      </section>
    )
  }

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, i) => (
          <CartItem key={i} {...item} />
        ))}
        <p className="total">
          Total: {total}
        </p>
        <CartButtons />
      </div>
    </section>
  )
}
