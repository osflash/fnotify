'use client'

import Link from 'next/link'

import { Auth } from '~/components/Auth'
import { ButtonGithub } from '~/components/Button/Github'
import { Logo } from '~/components/Logo'
import { ToggleTheme } from '~/components/ToggleTheme'

export const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-40 border-b border-skin-border bg-skin-bg">
      <div className="mx-auto max-w-5xl px-4 pl-0 pr-3 sm:!px-4">
        <div className="flex items-center py-[12px]">
          <div className="ml-3 flex flex-auto items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Auth />
            <ToggleTheme />
            <ButtonGithub />
          </div>
        </div>
      </div>
    </div>
  )
}
