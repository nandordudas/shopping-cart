import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import type { ErrorInterface, ErrorInterfaceWithStatus, Product } from './types'
import { PRODUCTS_URL } from './product.constants'

interface ProductResult {
  products: Product[]
}

export const getProductsThunk = createAsyncThunk<Product[], void>(
  'products/getProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const result = await axios.get<ProductResult>(PRODUCTS_URL)

      return result.data.products
    }
    catch (error) {
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
