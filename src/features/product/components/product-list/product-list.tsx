import { useEffect, useMemo } from 'react'

import { useAppDispatch, useAppSelector } from '~/app/store/hooks'
import { ProductPanel } from '~/features/product/components/product-panel/product-panel'
import { selectError, selectIsProductLoading, selectProducts } from '~/features/product/product.selectors'
import { getProductsThunk } from '~/features/product/product.thunks'

import './product-list.css'

export function ProductList() {
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)
  const products = useAppSelector(selectProducts)
  const isLoading = useAppSelector(selectIsProductLoading)

  useEffect(() => {
    // INFO: prevent double call during development.
    return () => {
      dispatch(getProductsThunk())
    }
  }, [dispatch])

  // TODO: extract each case into component
  const productList = useMemo(() => {
    if (error) {
      return (
        <div className="error-container">
          <p className="error-status">
            {error!.status}
          </p>
          <p className="error-message">
            {error!.message}
          </p>
        </div>
      )
    }

    if (isLoading) {
      return (
        <div>
          <span aria-label="loading">
            Loading...
          </span>
        </div>
      )
    }

    return (
      <div className="product-list">
        <div className="product-container">
          {products.map(product => (
            <ProductPanel {...product} key={product.id} />
          ))}
        </div>
      </div>
    )
  }, [error, isLoading, products])

  return (
    <section>
      <h2>Products</h2>
      {productList}
    </section>
  )
}
