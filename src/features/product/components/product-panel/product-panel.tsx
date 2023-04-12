import { useCallback } from 'react'

import { useAppDispatch } from '~/app/store/hooks'
import { addToCart, calculateTotal } from '~/features/cart/cart.slice'
import type { CartItem } from '~/features/cart/types'
import { currencyFormatter } from '~/features/cart/utils/curency-formatter'
import type { Product } from '~/features/product/types'

import './product-panel.css'

interface ProductPanelProps extends Product {}

export function ProductPanel({ id, title, price, thumbnail }: ProductPanelProps) {
  const dispatch = useAppDispatch()

  const onClickAddToCart = useCallback(() => {
    const item = {
      id,
      amount: 1,
      title,
      price,
      thumbnail,
    } satisfies CartItem

    dispatch(addToCart(item))
    dispatch(calculateTotal())
  }, [dispatch, id, title, price, thumbnail])

  return (
    <article className="product-panel">
      <img src={thumbnail} alt={title} loading="lazy" draggable={false} />
      <div className="name-and-price-panel">
        <h3>
          {title}
        </h3>
        <p className="price">
          {currencyFormatter.format(price)}
        </p>
      </div>
      <div className="button-container">
        <button
          className="button add-cart"
          onClick={onClickAddToCart}
        >
          Add to Cart
        </button>
        <button className="button read-more">
          Read more
        </button>
      </div>
    </article>
  )
}
