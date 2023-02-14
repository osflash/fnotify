import Link from 'next/link'

interface PageProps {
  params: {
    username: string
    slug: string[]
  }
}

const Page: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <h2>Algo deu errado!</h2>

      <Link href="/">IR PARA A PÁGINA INICIAL</Link>
    </div>
  )
}

export default Page
