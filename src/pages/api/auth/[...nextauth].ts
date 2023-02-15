import NextAuth, { type NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { getRandomUsername } from '~/libs/user'

import { prisma } from '~/services/prisma'

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user: { id } }) {
      const user = await prisma.user.findUnique({ where: { id } })

      session.user = { ...session.user, id, username: user?.username }

      return session
    }
  },
  events: {
    async signIn({ user, isNewUser }) {
      if (isNewUser) {
        const { id } = user

        await prisma.user.update({
          where: { id },
          data: {
            username: await getRandomUsername(),
            usageUpdatedAt: new Date(Date.now())
          }
        })
      }
    }
  },
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    verifyRequest: '/',
    newUser: '/'
  }
}

export default NextAuth(authOptions)
