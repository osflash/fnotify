import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { getUsers } from '~/services/prisma/users'

import { onError } from '~/next-connect/onError'

const handler = nc<NextApiRequest, NextApiResponse>({ onError })

handler.get(async (req, res) => {
  const users = await getUsers()

  res.status(201).json(users)
})

export default handler
