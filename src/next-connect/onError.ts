import type { NextApiRequest, NextApiResponse } from 'next'
import type { ErrorHandler } from 'next-connect'

export const onError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  error,
  req,
  res
) => {
  if (error instanceof Error) {
    const { message } = error

    return res.status(500).json({ message })
  }

  if (error instanceof StatusCodeError) {
    const { message } = error

    return res.status(error.statusCode).json({ message })
  }

  res.status(500).json({ message: 'Algo deu errado!' })
}

export class StatusCodeError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string, options?: ErrorOptions) {
    super(message, options)

    this.statusCode = statusCode
  }
}
