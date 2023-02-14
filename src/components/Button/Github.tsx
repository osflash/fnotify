import { BsGithub } from 'react-icons/bs'

import Link from 'next/link'

const url = process.env.NEXT_PUBLIC_GITHUB || ''

export const ButtonGithub: React.FC = () => {
  return (
    <Link
      href={url}
      rel="external"
      target="_blank"
      className="rounded-full transition duration-200 ease-in-out hover:scale-110"
    >
      <BsGithub size={32} />
    </Link>
  )
}
