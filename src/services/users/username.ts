import { baseUrl } from '~/libs/utils'

import { UserResponse } from '~/pages/api/users/[username]'

export const getUserByUsername = async (
  username: string,
  init?: RequestInit | undefined
) => {
  try {
    const url = `${baseUrl}/api/users/${username}`

    const response = await fetch(url, init)

    if (!response.ok) {
      return null
    }

    return (await response.json()) as UserResponse
  } catch (err) {
    return null
  }
}

export const getUserSubscriptionByUsername = async (
  username: string,
  endpoint: string,
  init?: RequestInit | undefined
) => {
  try {
    const url = `${baseUrl}/api/users/${username}/subscription?endpoint=${endpoint}`

    const response = await fetch(url, init)

    if (!response.ok) {
      return false
    }

    return (await response.json()) as boolean
  } catch (err) {
    return false
  }
}

export const toggleSubscriptionByUsername = async (
  username: string,
  subscription: PushSubscription
) => {
  const response = await fetch(`/api/users/${username}/toggle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription.toJSON())
  })

  return (await response.json()) as boolean
}
