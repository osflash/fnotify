import { notFound } from 'next/navigation'

import { prisma } from '~/services/prisma'

import { Boundary } from '~/components/Boundary'

import { Subscription } from './Subscription'

interface PageProps {
  params: {
    username: string
  }
}

export const dynamicParams = true
export const revalidate = 60

export const generateStaticParams = async () => {
  const user = await prisma.user.findMany({ select: { username: true } })

  return user
}

const Page = async ({ params: { username } }: PageProps) => {
  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      username: true,
      image: true,
      subscriptions: true
    }
  })

  if (!user) return notFound()

  return (
    <Boundary>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>{user.username}</h1>
        <p>{user.subscriptions.length} seguidores!</p>

        <Subscription username={username} />
      </div>
    </Boundary>
  )
}

export default Page
