'use client'

import { BsX } from 'react-icons/bs'

import { signIn } from 'next-auth/react'

import * as Dialog from '@radix-ui/react-dialog'

import { Button } from '~/components/Button'
export const SignIn: React.FC = () => {
  const handleClick = async () => {
    await signIn('github', { redirect: true, callbackUrl: '/' })
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="rounded-lg px-3 py-1 text-sm font-medium"
      >
        Entrar
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/80" />

        <Dialog.Content className="absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-zinc-900 p-10">
          <Dialog.Close className="absolute right-6 top-6 rounded-lg text-zinc-400 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900">
            <BsX size={24} aria-label="Close" />
          </Dialog.Close>

          <Dialog.Title className="text-3xl font-extrabold leading-tight">
            Entrar com
          </Dialog.Title>

          <div className="mt-6 flex w-full flex-col gap-2">
            <Button onClick={handleClick}>GitHub</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
