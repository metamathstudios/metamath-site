import Image from 'next/image'
import { useContext, useState, useEffect } from 'react'
import { PopupContext } from '../../../../../../contexts/PopupContext'

import chatr from './assets/chatr.png'
import mobileProjects from './assets/mobilesomeprojects.svg'
import planethorse from './assets/planethorse.png'
import portales from './assets/portales.png'
import megahyped from './assets/megahyped.png'
import projects from './assets/someprojects.svg'

import styles from './styles.module.scss'

const ProjectsContent = () => {
  const { setPopup } = useContext(PopupContext)

  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.innerHeight)
  })

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSideContainer}>
          <div className={styles.title}>
            <Image src={projects} alt="Projects" height={330} />
          </div>

          <div className={styles.mobileTitle}>
            <Image src={mobileProjects} alt="Projects" width={200} />
          </div>
        </div>

        <div className={styles.rightSideContainer}>
          <div className={styles.projectsGrid}>
            <div
              className={styles.projectCard}
              onClick={() => {
                setPopup('planethorse')
              }}
            >
              <Image
                src={planethorse}
                alt="Planet Horse"
                className={styles.image}
              />
            </div>
            
            {screenHeight >= 640 ?
              <div
                className={styles.projectCard}
                onClick={() => {
                  setPopup('megahyped')
                }}
              >
                <Image
                src={megahyped}
                alt="Mega Hyped"
                className={styles.image}
              />
              </div>
            : null}

            <div
              className={styles.projectCard}
              onClick={() => {
                setPopup('chatr')
              }}
            >
              <Image src={chatr} alt="chatr Horse" className={styles.image} />
            </div>

            <div
              className={styles.projectCard}
              onClick={() => {
                setPopup('portales')
              }}
            >
              <Image src={portales} alt="Portales" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContent
