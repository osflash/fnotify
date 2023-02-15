import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { z } from 'zod'

import { prisma } from '~/services/prisma'

const handler = nc<NextApiRequest, NextApiResponse<boolean>>()

handler.get(async (req, res) => {
  const queryBody = z.object({
    username: z.string(),
    endpoint: z.string()
  })

  const { username, endpoint } = queryBody.parse({
    ...req.query,
    ...req.headers
  })

  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      subscriptions: {
        where: { endpoint }
      }
    }
  })

  if (!user) {
    throw new Error('Desculpe, o usuário não foi encontrado!')
  }

  res.status(201).json(!!user.subscriptions.length)
})

export default handler
