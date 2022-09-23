import Sidebar from '../Sidebar'
import AboutUs from './components/AboutUs'
import SlideBar from './components/FixedComponents/SlideMenu'
import Hero from './components/Hero'
import MetaMath from './components/MetaMath'
import Projects from './components/Projects'
import WhatWeDo from './components/WhatWeDo'

import styles from './styles.module.scss'

import { useEffect, useState } from 'react'
import { FullPage, Slide } from 'react-full-page'

const LandingPage = () => {
  let [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  })

  return (
    <div className={styles.container}>
      <FullPage duration={800}>
        <SlideBar />
        <Sidebar />

        <Slide>
          <div id='heroPage'>
            <Hero/>
          </div>
        </Slide>

        <Slide>
          <div id='aboutUsPage'>
            <AboutUs />
          </div>
        </Slide>

        <Slide>
          <div id='whatWeDoPage'>
            <WhatWeDo />
          </div>
        </Slide>

        {screenWidth >= 700 ? (
          <Slide>
            <div id='projectsPage'>
              <Projects />
            </div>
          </Slide>
        ) : null}

        <Slide>
          <div id='metamathPage'>
            <MetaMath />
          </div>
        </Slide>
      </FullPage>
    </div>
  )
}

export default LandingPage
