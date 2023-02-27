import { rest } from 'msw'

export const handlers = [rest.get('*', (req, res, ctx) => res(ctx.status(200), ctx.json({})))]

export const networkErrorHandlers = [
  rest.get('*', (req, res, ctx) => res.networkError('Boom there was error'))
]
