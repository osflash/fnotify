import { useSession } from 'next-auth/react'

import { SignIn } from './SignIn'
import { SignOut } from './SignOut'

export const Auth: React.FC = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return null

  return <>{session ? <SignOut /> : <SignIn />}</>
}
