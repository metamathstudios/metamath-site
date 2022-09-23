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
          <Hero />
        </Slide>

        <Slide>
          <AboutUs />
        </Slide>

        <Slide>
          <WhatWeDo />
        </Slide>

        {screenWidth >= 700 ? (
          <Slide>
            <Projects />
          </Slide>
        ) : null}
        <Slide>
          <MetaMath />
        </Slide>
      </FullPage>
    </div>
  )
}

export default LandingPage
