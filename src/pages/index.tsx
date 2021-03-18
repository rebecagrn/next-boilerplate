import Head from 'next/head'

export default function Home({ title = "Rebeca"}) {
  return (
    <div>
      <Head>
        <title> {title}</title>
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
