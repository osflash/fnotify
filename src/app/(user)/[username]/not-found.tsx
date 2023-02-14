'use client'

import Link from 'next/link'

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <h2>Este usuário não está mais disponível</h2>

      <Link href="/">IR PARA A PÁGINA INICIAL</Link>
    </div>
  )
}

export default NotFound
