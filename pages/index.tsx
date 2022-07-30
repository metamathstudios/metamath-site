import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Landing/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
    </>
  )
}

export default Home
