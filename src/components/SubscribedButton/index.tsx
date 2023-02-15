'use client'

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
  const url = `/api/users/${username}/subscription`
  const { endpoint } = subscription

  const { isLoading, data, error, mutate } = useSubscribed(url, {
    headers: { endpoint }
  })

  const handleClick = async () => {
    const response = await fetch(`/api/users/${username}/toggle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscription.toJSON())
    })

    const data = (await response.json()) as boolean

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
