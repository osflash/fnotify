import { prisma } from '~/services/prisma'

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        username: true,
        image: true,
        subscriptions: true
      }
    })

    return users
  } catch (error) {
    return { error }
  }
}
