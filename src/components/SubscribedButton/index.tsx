'use client'

import { baseUrl } from '~/libs/utils'

import { toggleSubscriptionByUsername } from '~/services/users/username'

import { useSubscribed } from '~/hooks/useSubscribed'

import { Button } from '~/components/Button'

interface SubscribedButtonProps {
  username: string
  subscription: PushSubscription
}

export const SubscribedButton: React.FC<SubscribedButtonProps> = ({
  username,
  subscription
}) => {
  const url = `${baseUrl}/api/users/${username}/subscription`
  const { endpoint } = subscription

  const { isLoading, data, error, mutate } = useSubscribed(url, {
    headers: { endpoint }
  })

  const handleClick = async () => {
    const data = await toggleSubscriptionByUsername(username, subscription)

    await mutate(data, false)
  }

  if (isLoading) return null

  if (error) {
    return <p className="py-1 text-sm font-medium ">Algo deu errado!</p>
  }

  if (data) {
    return (
      <Button onClick={handleClick} kind="error">
        Cancelar notificações
      </Button>
    )
  }

  return <Button onClick={handleClick}>Receber notificações</Button>
}
