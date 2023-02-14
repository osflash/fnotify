'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

import { useServiceWorker } from '~/hooks/useServiceWorker'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  useServiceWorker()

  return (
    <>
      <SessionProvider>
        <NextThemesProvider defaultTheme="system" enableSystem>
          <>{children}</>
        </NextThemesProvider>
      </SessionProvider>

      <VercelAnalytics />
    </>
  )
}
