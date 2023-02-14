import { PayloadInput } from '~/libs/push'

export const sendNotification = async (payload?: PayloadInput) => {
  return await fetch(`/api/push/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
}
