import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { getUsernameSchema, subscriptionSchema } from '~/libs/push'

import { prisma } from '~/services/prisma'
import { ratelimit } from '~/services/upstash'

import { onError, StatusCodeError } from '~/next-connect/onError'

const handler = nc<NextApiRequest, NextApiResponse<boolean>>({ onError })

handler.post(async (req, res) => {
  const { username } = getUsernameSchema.parse(req.query)

  const {
    endpoint,
    keys: { auth, p256dh }
  } = subscriptionSchema.parse(req.body)

  const { success } = await ratelimit.limit('toggle')

  if (!success) {
    throw new StatusCodeError(429, 'Não faça DDoS')
  }

  const user = await prisma.user.findUnique({
    where: { username }
  })

  if (!user) {
    throw new Error('Desculpe, o usuário não foi encontrado!')
  }

  const subscription = await prisma.subscription.findFirst({
    where: { endpoint }
  })

  if (subscription) {
    await prisma.subscription.delete({ where: { id: subscription.id } })

    return res.status(201).json(false)
  } else {
    await prisma.subscription.create({
      data: { endpoint, auth, p256dh, userId: user.id }
    })

    return res.status(201).json(true)
  }
})

export default handler
