import type { NextApiRequest, NextApiResponse } from 'next'
import type { ErrorHandler } from 'next-connect'

export const onError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  error,
  req,
  res,
  next
) => {
  res.status(500).json({
    error: 'Algo deu errado!'
  })
}
