// import { PayloadDataInput } from '../src/libs/push'

/**
 * @type {ServiceWorkerGlobalScope}
 */
const sw = self

sw.addEventListener('push', event => {
  /**
   * @type {NotificationOptions}}
   */
  const options = event.data?.json()

  /**
   * @type {PayloadDataInput}
   */
  const data = options.data
  const title = data?.title || 'FNotify'

  const notification = sw.registration.showNotification(title, options)

  event.waitUntil(notification)
})

sw.addEventListener('notificationclick', event => {
  const { notification } = event

  notification.close()

  const handleClick = async () => {
    /**
     * @type {PayloadDataInput}
     */
    const data = notification.data

    if (data?.url) {
      const { url } = data
      // const urlToOpen = new URL(`external?url=${url}`, self.location.origin)

      clients.openWindow(new URL(url))
    }
  }

  event.waitUntil(handleClick())
})

sw.addEventListener('install', () => {
  sw.skipWaiting()
})

sw.addEventListener('activate', event => {
  event.waitUntil(clients.claim())
})
