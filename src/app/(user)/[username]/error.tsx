'use client'

import { useEffect } from 'react'

import { Boundary } from '~/components/Boundary'
import { Button } from '~/components/Button'

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Boundary color="red">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-sm text-fnotify-red">
          <strong className="font-bold">Error:</strong> {error?.message}
        </div>
        <div>
          <Button onClick={() => reset()}>Tente novamente</Button>
        </div>
      </div>
    </Boundary>
  )
}

export default Error
