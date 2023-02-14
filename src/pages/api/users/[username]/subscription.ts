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

  const user = await prisma.user.findUnique({ where: { username } })

  if (!user) {
    throw new Error('Desculpe, o usuário não foi encontrado!')
  }

  const subscription = await prisma.subscription.findFirst({
    where: { endpoint }
  })

  res.status(201).json(!!subscription)
})

export default handler
