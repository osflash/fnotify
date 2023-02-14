import { notFound } from 'next/navigation'

import { getUserByUsername } from '~/services/users/username'

import { Boundary } from '~/components/Boundary'

import { Subscription } from './Subscription'

interface PageProps {
  params: {
    username: string
  }
}

export const generateMetadata = async ({ params }: PageProps) => {
  return {}
}

export const dynamicParams = true

export const generateStaticParams = async () => {
  return []
}

const Page = async ({ params: { username } }: PageProps) => {
  const user = await getUserByUsername(username, {
    next: { revalidate: 30 }
  })

  if (!user) return notFound()

  return (
    <Boundary>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>{user.username}</h1>
        <p>{user.follows} seguidores!</p>

        <Subscription username={username} />
      </div>
    </Boundary>
  )
}

export default Page
