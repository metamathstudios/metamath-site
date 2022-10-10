import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ProjectsPage from '../components/Projects'
import { ProjectsPageContext } from '../contexts/ProjectsPage'

const Projects: NextPage = () => {
  const [popup, setPopup] = useState('')

  return (
    <ProjectsPageContext.Provider value={{ popup, setPopup }}>
      <Head>
        <title>MetaMath - Projects</title>
        <meta name="description" content="Website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectsPage />
    </ProjectsPageContext.Provider>
  )
}

export default Projects
