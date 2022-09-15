import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ServicesPage from '../components/Services'
import { ServicesPageContext } from '../contexts/ServicesPage'
import { SidebarContext } from '../contexts/Sidebar'

const Services: NextPage = () => {
  const [serviceSlide, setServiceSlide] = useState(0)
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
      <ServicesPageContext.Provider value={{ serviceSlide, setServiceSlide }}>
        <Head>
          <title>MetaMath - Services</title>
          <meta name="description" content="Website description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ServicesPage />
      </ServicesPageContext.Provider>
    </SidebarContext.Provider>
  )
}

export default Services
