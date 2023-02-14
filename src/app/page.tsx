'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { Boundary } from '~/components/Boundary'
import { NotificationForm } from '~/components/NotificationForm'

const Home: React.FC = () => {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h1 className="text-6xl">Flash Notify</h1>

      <div>
        <h4 className="text-center">
          Com o nosso aplicativo, você pode enviar notificações
          <strong className="font-bold text-fnotify-orange">
            {` instantâneas `}
          </strong>
          para seus seguidores.
        </h4>
        <h4>
          Mantenha seus seguidores informados sobre suas últimas novidades e
          atualizações com facilidade e rapidez. Experimente agora!
        </h4>
      </div>

      {session && (
        <main className="flex flex-col justify-center gap-5">
          <Link href={session.user.username!}>
            <Boundary>
              <h2>Meu perfil</h2>
            </Boundary>
          </Link>

          <NotificationForm />
        </main>
      )}
    </div>
  )
}

export default Home
