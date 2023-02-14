import type { NextApiRequest, NextApiResponse } from 'next'
import type { NoMatchHandler } from 'next-connect'

const onNoMatch: NoMatchHandler<NextApiRequest, NextApiResponse> = (
  req,
  res
) => {
  //
}
