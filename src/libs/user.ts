import { nanoid } from '~/libs/utils'

import { prisma } from '~/services/prisma'

export const getRandomUsername = async (): Promise<string> => {
  try {
    const username = nanoid()

    const response = await prisma.user.findUnique({
      where: { username }
    })

    if (response) {
      return getRandomUsername()
    } else {
      return username
    }
  } catch (err) {
    return getRandomUsername()
  }
}
