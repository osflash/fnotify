import React from 'react'

import { Boundary } from '~/components/Boundary'

const Loading: React.FC = () => {
  return (
    <Boundary labels={['Carregando']} color="blue" animateRerendering={false}>
      <div className="flex animate-pulse flex-col items-center justify-center gap-2">
        <div className="h-20 w-20 rounded-lg bg-gray-700" />
        <div className="h-4 w-28 rounded-lg bg-gray-700" />
        <div className="h-3 w-14 rounded-lg bg-gray-700" />
      </div>
    </Boundary>
  )
}

export default Loading
