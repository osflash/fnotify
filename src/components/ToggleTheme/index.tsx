'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { Button } from '~/components/Button'

export const ToggleTheme: React.FC = () => {
  const [iconTheme, setIconTheme] = useState('🌞')
  const { theme, setTheme } = useTheme()

  const handleClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    setIconTheme(theme === 'light' ? '🌚' : '🌞')
  }, [theme])

  return (
    <Button kind="icon" onClick={handleClick}>
      {iconTheme}
    </Button>
  )
}
