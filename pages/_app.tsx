import type { AppProps } from 'next/app'
import '../styles/globals.scss'

import 'swiper/css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Preloader from '../components/Preloader'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AOS.init()
    setTimeout(() => setLoading(true), 4000)
  }, [])

  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
