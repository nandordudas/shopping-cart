import { useCallback } from 'react'

import { useAppDispatch } from '~/app/store/hooks'
import { calculateTotal, changeAmount, removeItemFromCart } from '~/features/cart/cart.slice'
import type { CartItem as _CartItem } from '~/features/cart/types'
import { currencyFormatter } from '~/features/cart/utils/curency-formatter'

import './cart-item.css'

export function CartItem({ id, title, price, amount, thumbnail }: _CartItem) {
  const dispatch = useAppDispatch()

  const onClickDecrement = useCallback(() => {
    if (amount === 1)
      dispatch(removeItemFromCart({ id }))
    else
      dispatch(changeAmount({ id, method: 'decrease' }))

    dispatch(calculateTotal())
  }, [amount, dispatch, id])

  const onClickIncrement = useCallback(() => {
    dispatch(changeAmount({ id, method: 'increase' }))
    dispatch(calculateTotal())
  }, [dispatch, id])

  return (
    <article className="cart-item">
      <div className="cart-item-description">
        <img className="cart-item-img" src={thumbnail} alt={title} loading="lazy" draggable={false} />
        <div>
          <p className="cart-item-name">
            {title}
          </p>
          <p className="cart-item-price">
            {currencyFormatter.format(price)}
          </p>
        </div>
      </div>
      <div className="amount-container">
        <button
          type="button"
          className="amount-button increase"
          onClick={onClickIncrement}
        >
          +
        </button>
        <p className="cart-item-amount">
          {amount}
        </p>
        <button
          type="button"
          className="amount-button decrease"
          onClick={onClickDecrement}
        >
          -
        </button>
      </div>
    </article>
  )
}
