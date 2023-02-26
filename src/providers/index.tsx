'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { useServiceWorker } from '~/hooks/useServiceWorker'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  useServiceWorker()

  return (
    <>
      <SessionProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <>{children}</>
        </NextThemesProvider>
      </SessionProvider>
    </>
  )
}
