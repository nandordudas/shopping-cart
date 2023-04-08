import { useAppSelector } from '~/app/store/hooks'
import { selectCartItems, selectIsCartEmpty, selectTotal } from '~/features/cart/cart.selectors'

export function Cart() {
  const total = useAppSelector(selectTotal)
  const cartItems = useAppSelector(selectCartItems)
  const isCartEmpty = useAppSelector(selectIsCartEmpty)

  if (isCartEmpty) {
    return (
      <section>
        <h2>Cart is empty</h2>
      </section>
    )
  }

  return (
    <section>
      <h2>Cart items</h2>
      <ul>
        {cartItems.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
      <p>Total: {total} $</p>
    </section>
  )
}
