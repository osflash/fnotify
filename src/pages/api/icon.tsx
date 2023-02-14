/* eslint-disable @next/next/no-img-element */
import { NextRequest } from 'next/server'

import { ImageResponse } from '@vercel/og'
import clsx from 'clsx'
import { z } from 'zod'

export const config = {
  runtime: 'edge'
}

const logo = new URL('../../../public/favicon.png', import.meta.url).toString()

const paramsSchema = z
  .object({
    w: z
      .string()
      .optional()
      .transform(v => (!isNaN(Number(v)) ? Number(v) : 1200)),
    h: z
      .string()
      .optional()
      .transform(v => (!isNaN(Number(v)) ? Number(v) : 1200)),
    tw: z.string().optional()
  })
  .transform(({ w, h, tw }) => {
    return { width: w, height: h, tw }
  })

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const query = Object.fromEntries(searchParams.entries())

  const { width, height, tw } = paramsSchema.parse(query)

  return new ImageResponse(
    (
      <div tw={clsx('flex w-screen h-screen bg-transparent', tw)}>
        <img
          src={logo}
          alt="Logo"
          tw={clsx('w-screen h-screen bg-transparent', tw)}
        />
      </div>
    ),
    { width, height }
  )
}
