'use client'

import { signOut } from 'next-auth/react'

import { Button } from '~/components/Button'

export const SignOut: React.FC = () => {
  return <Button onClick={() => signOut()}>Sair</Button>
}
