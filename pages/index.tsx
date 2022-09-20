import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import LandingPage from '../components/Landing'
import { SidebarContext } from '../contexts/Sidebar'

const Home: NextPage = () => {
  const [sidebar, setSidebar] = useState(false)

  const openSidebar = () => {
    const sidebar = document.getElementById('sidebar')
    const content = document.getElementById('sidebarContent')

    setSidebar(true)

    if (sidebar && content) {
      if (!window.matchMedia('(max-width: 900px)').matches) {
        sidebar.style.width = '350px'
      } else {
        sidebar.style.width = '100%'
      }

      setTimeout(() => {
        content.style.display = 'flex'
      }, 300)

      setTimeout(() => {
        content.style.opacity = '100%'
      }, 500)
    }
  }

  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebar')
    const content = document.getElementById('sidebarContent')

    setSidebar(false)

    if (sidebar && content) {
      content.style.opacity = '0%'

      setTimeout(() => {
        content.style.display = 'none'
        sidebar.style.width = '0px'
      }, 200)
    }
  }
  
  return (
    <SidebarContext.Provider
      value={{ sidebar, setSidebar, openSidebar, closeSidebar }}
    >
      <Head>
        <title>MetaMath</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingPage />
    </SidebarContext.Provider>
  )
}

export default Home
