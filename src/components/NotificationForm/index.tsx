'use client'

import { FormEvent, useState } from 'react'

import { PayloadInput } from '~/libs/push'

export const NotificationForm: React.FC = () => {
  const [payload, setPayload] = useState<PayloadInput>({})

  const { data } = payload

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await fetch(`/api/push/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    setPayload({
      data: {
        title: '',
        url: ''
      },
      actions: undefined,
      badge: undefined,
      body: '',
      dir: undefined,
      icon: undefined,
      image: undefined,
      lang: undefined,
      renotify: undefined,
      requireInteraction: undefined,
      silent: undefined,
      tag: undefined,
      timestamp: undefined,
      vibrate: undefined
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex w-full flex-col text-left"
    >
      <label htmlFor="title" className="font-semibold leading-tight">
        Titulo
      </label>
      <input
        type="text"
        id="title"
        required
        autoFocus
        placeholder="OsFlash"
        className="mt-2 rounded-lg p-3"
        value={data?.title}
        onChange={e =>
          setPayload(prev => ({ ...prev, data: { title: e.target.value } }))
        }
      />

      <label htmlFor="body" className="mt-2 font-semibold leading-tight">
        Descrição
      </label>
      <input
        type="text"
        id="body"
        placeholder="Estou online na Twitch!"
        className="mt-2 rounded-lg p-3"
        value={payload.body}
        onChange={e => setPayload(prev => ({ ...prev, body: e.target.value }))}
      />

      <label htmlFor="url" className="mt-2 font-semibold leading-tight">
        Site
      </label>
      <input
        type="text"
        id="url"
        placeholder="https://www.twitch.tv/osflash"
        className="mt-2 rounded-lg p-3"
        value={data?.url}
        onChange={e =>
          setPayload(prev => ({ ...prev, data: { url: e.target.value } }))
        }
      />

      <button
        type="submit"
        className="mt-5 flex items-center justify-center rounded-lg bg-skin-submit p-4 font-semibold"
      >
        Enviar
      </button>
    </form>
  )
}
