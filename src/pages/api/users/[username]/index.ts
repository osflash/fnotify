import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { z } from 'zod'

import { getUsernameSchema } from '~/libs/push'

import { prisma } from '~/services/prisma'

import { onError } from '~/next-connect/onError'

const userSchema = z.object({
  username: z.string(),
  image: z.string(),
  follows: z.number()
})

export type UserResponse = z.infer<typeof userSchema>

const handler = nc<NextApiRequest, NextApiResponse<UserResponse>>({ onError })

handler.get(async (req, res) => {
  const { username } = getUsernameSchema.parse(req.query)

  const user = await prisma.user.findUnique({ where: { username } })

  if (!user) {
    throw new Error('Desculpe, o usuário não foi encontrado!')
  }

  const userId = user.id

  const subscriptions = await prisma.subscription.findMany({
    where: { userId }
  })

  const userBody = userSchema.parse({ ...user, follows: subscriptions.length })

  res.status(201).json(userBody)
})

export default handler
