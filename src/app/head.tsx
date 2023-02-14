const title = process.env.NEXT_PUBLIC_TITLE
const description = process.env.NEXT_PUBLIC_DESCRIPTION

const Head = () => {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </>
  )
}

export default Head
