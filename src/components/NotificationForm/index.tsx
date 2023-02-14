'use client'

import { FormEvent, useState } from 'react'

import { PayloadInput } from '~/libs/push'

import { sendNotification } from '~/services/push/send'

export const NotificationForm: React.FC = () => {
  const [payload, setPayload] = useState<PayloadInput>({
    data: {
      title: '',
      url: ''
    },
    body: ''
  })

  const { data } = payload

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await sendNotification(payload)

    setPayload({
      data: {
        title: '',
        url: ''
      },
      body: ''
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
        required
        placeholder="Estou online na Twitch!"
        className="mt-2 rounded-lg p-3"
        value={payload.body}
        onChange={e => setPayload(prev => ({ ...prev, body: e.target.value }))}
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
