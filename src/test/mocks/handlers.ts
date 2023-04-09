import { rest } from 'msw'

import { PRODUCTS_URL } from '~/features/product/product.constants'

export const handlers = [
  rest.get(PRODUCTS_URL, async (_req, res, ctx) => {
    const { default: products } = await import('./products.json')

    return res(ctx.status(200), ctx.json(products))
  }),
]
