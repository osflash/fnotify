'use client'

import { useAsync } from 'react-use'

import { getSubscription } from '~/libs/pushManager'

import { SubscribedButton } from '~/components/SubscribedButton'

interface SubscriptionProps {
  username: string
}

export const Subscription: React.FC<SubscriptionProps> = ({ username }) => {
  const { value: subscription } = useAsync(async () => {
    return await getSubscription()
  })

  if (!subscription) return null

  return <SubscribedButton username={username} subscription={subscription} />
}
