import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { prisma } from '~/services/prisma'

import { onError } from '~/next-connect/onError'

const handler = nc<NextApiRequest, NextApiResponse>({ onError })

handler.get(async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      username: true,
      image: true,
      subscriptions: true
    }
  })

  res.status(201).json(users)
})

export default handler
