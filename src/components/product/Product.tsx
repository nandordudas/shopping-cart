import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/app/store/hooks'
import { selectIsProductLoading, selectProducts } from '~/features/product/product.selectors'
import { getProductsThunk } from '~/features/product/product.thunks'

export function Product() {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)
  const isLoading = useAppSelector(selectIsProductLoading)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [dispatch])

  return (
    <div>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {products.length > 0 && 'has product'}
    </div>
  )
}
