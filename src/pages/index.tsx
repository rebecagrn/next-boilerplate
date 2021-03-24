import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Rebeca' }: Props) {
  return (
    <div>
      <Head>
        <title> {title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">{title}</a>
        </h1>
      </main>
    </div>
  )
}
