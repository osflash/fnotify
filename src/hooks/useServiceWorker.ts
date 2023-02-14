import { useAsync } from 'react-use'

export const useServiceWorker = () => {
  return useAsync(async () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('dispositivo não suporta Service Worker!')
    }

    if (!('PushManager' in window)) {
      throw new Error('dispositivo não suporta PushManager!')
    }

    return await navigator.serviceWorker.register('sw.js')
  })
}
