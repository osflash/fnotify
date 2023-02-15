'use client'

import { useAsync } from 'react-use'

import { getSubscription } from '~/libs/pushManager'

import { Button } from '~/components/Button'
import { SubscribedButton } from '~/components/SubscribedButton'

interface SubscriptionProps {
  username: string
}

export const Subscription: React.FC<SubscriptionProps> = ({ username }) => {
  const {
    value: subscription,
    loading,
    error
  } = useAsync(async () => {
    return await getSubscription()
  })

  if (error) {
    throw new Error(error.message) // Tratar os erros
  }

  if (loading) {
    return (
      <div className="h-7 w-full animate-pulse rounded-lg bg-skin-border" />
    )
  }

  if (!subscription) {
    return (
      <Button kind="default" disabled>
        Notificações desativadas!
      </Button>
    )
  }

  return <SubscribedButton username={username} subscription={subscription} />
}
