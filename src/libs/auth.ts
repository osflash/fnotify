import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { RequestHandler } from 'next-connect'

import { User } from '@prisma/client'

import { prisma } from '~/services/prisma'

import { authOptions } from '~/pages/api/auth/[...nextauth]'

export type AuthNextApiRequest = NextApiRequest & {
  user: User
}

export type ErrorResponse = {
  message: string
}

export const userAuth: RequestHandler<
  AuthNextApiRequest,
  NextApiResponse<ErrorResponse>
> = async (req, res, next) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({
      message: 'Acesso não autorizado. Por favor, faça login para continuar.'
    })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  })

  if (!user) {
    return res.status(404).json({
      message: 'Desculpe, não foi possível encontrar o usuário.'
    })
  }

  req.user = user

  next()
}
