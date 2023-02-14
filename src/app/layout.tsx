import '~/styles/globals.scss'

import { ServerThemeProvider } from 'next-themes'

import Footer from '~/components/Footer'
import { Header } from '~/components/Header'

import { Providers } from '~/providers'

interface RootLayoutProps {
  children: React.ReactNode
}

const title = process.env.NEXT_PUBLIC_TITLE
const description = process.env.NEXT_PUBLIC_DESCRIPTION

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ServerThemeProvider defaultTheme="system" enableSystem>
      <html lang="pt-br" suppressHydrationWarning>
        <head />
        <body>
          <Providers>
            <div className="flex min-h-screen">
              <div className="relative flex w-screen min-w-0 shrink-0 flex-col sm:w-auto sm:shrink sm:grow">
                <Header />

                <div className="mx-auto h-full w-full max-w-5xl overflow-auto px-4 py-6">
                  {children}
                </div>

                <Footer />
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}

export default RootLayout
