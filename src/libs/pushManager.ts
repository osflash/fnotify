const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

export const getSubscription = async () => {
  const serviceWorker = await navigator.serviceWorker.ready

  let subscription = await serviceWorker.pushManager.getSubscription()

  if (!subscription) {
    subscription = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicKey
    })
  }

  return subscription
}
