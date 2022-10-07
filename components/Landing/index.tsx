import { useEffect, useState } from 'react'
import { FullPage, Slide } from 'react-full-page'
import { SlideContext } from '../../contexts/SlideContext'
import Sidebar from '../Sidebar'
import AboutUs from './components/AboutUs'
import SlideBar from './components/FixedComponents/SlideMenu'
import Hero from './components/Hero'
import MetaMath from './components/MetaMath'
import Projects from './components/Projects'
import WhatWeDo from './components/WhatWeDo'
import styles from './styles.module.scss'

interface SlideDataType {
  from: number
  to: number
}

const LandingPage = () => {
  const [actualSlide, setActualSlide] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  })

  return (
    <SlideContext.Provider value={{ actualSlide, setActualSlide }}>
      <div className={styles.container}>
        <FullPage
          duration={800}
          afterChange={(data: SlideDataType) => {setActualSlide(data.to)}}
        >
          <SlideBar />
          <Sidebar />

          <Slide>
            <div id="heroPage">
              <Hero />
            </div>
          </Slide>

          <Slide>
            <div id="aboutUsPage">
              <AboutUs />
            </div>
          </Slide>

          <Slide>
            <div id="whatWeDoPage">
              <WhatWeDo />
            </div>
          </Slide>

          <Slide>
            <div id="projectsPage">
              <Projects />
            </div>
          </Slide>

          <Slide>
            <div id="metamathPage">
              <MetaMath />
            </div>
          </Slide>
        </FullPage>
      </div>
    </SlideContext.Provider>
  )
}

export default LandingPage
