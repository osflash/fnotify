import { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  kind?: 'default' | 'icon' | 'error'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  kind = 'default',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx('rounded-lg px-3 py-1 font-medium', {
        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
          kind === 'default',
        'rounded-full px-0 py-0 text-3xl transition duration-200 ease-in-out hover:scale-110':
          kind === 'icon',
        'bg-red-600 text-red-50 hover:bg-red-500 hover:text-white':
          kind === 'error'
      })}
    >
      {children}
    </button>
  )
}
