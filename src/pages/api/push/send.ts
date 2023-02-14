import { NextApiResponse } from 'next'
import nc from 'next-connect'

import WebPush from 'web-push'
import { WebPushError } from 'web-push'

import { AuthNextApiRequest, userAuth } from '~/libs/auth'
import { payloadSchema } from '~/libs/push'
import { baseUrl } from '~/libs/utils'

import { prisma } from '~/services/prisma'

const handler = nc<AuthNextApiRequest, NextApiResponse>()

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!
const privateKey = process.env.PRIVATE_KEY!

WebPush.setVapidDetails(baseUrl, publicKey, privateKey)

handler.use(userAuth)

handler.post(async (req, res) => {
  const payload = payloadSchema.parse(req.body)

  const subscriptions = await prisma.subscription.findMany({
    where: { userId: req.user.id }
  })

  if (subscriptions.length === 0) {
    return res.status(404).end('')
  }

  const notifications = subscriptions.map(
    async ({ id, endpoint, auth, p256dh }) => {
      try {
        const buffer = Buffer.from(JSON.stringify(payload))

        return await WebPush.sendNotification(
          { endpoint, keys: { auth, p256dh } },
          buffer
        )
      } catch (err) {
        if (err instanceof WebPushError) {
          await prisma.subscription.delete({ where: { id } })
        }
      }
    }
  )

  const data = await Promise.all(notifications)

  res.status(200).json({
    total: data.length,
    sendCount: subscriptions.length
  })
})

export default handler
