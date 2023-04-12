import { useAppSelector } from '~/app/store/hooks'
import { selectTotal } from '~/features/cart/cart.selectors'

export function Footer() {
  const total = useAppSelector(selectTotal)

  return (
    <footer>
      <p>Total: {total}</p>
    </footer>
  )
}
