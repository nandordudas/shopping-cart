import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { PRODUCTS_URL } from './product.constants'
import type { ErrorInterface, ErrorInterfaceWithStatus, Product } from './types'

interface ProductResult<Item extends object> {
  products: Item[]
}

export const getProductsThunk = createAsyncThunk<Product[], void>(
  'product/getProducts',
  async (_, thunkAPI) => {
    try {
      const result = await axios.get<ProductResult<Product>>(PRODUCTS_URL)

      return result.data.products
    }
    catch (error) {
      const { rejectWithValue } = thunkAPI

      if (!axios.isAxiosError(error)) {
        return rejectWithValue({
          message: 'Something went wrong...',
        } as ErrorInterface)
      }

      const { message, response } = error

      return rejectWithValue({
        message,
        status: response?.status || 500,
      } as ErrorInterfaceWithStatus)
    }
  },
)
