import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { SlideContext } from '../../../../../contexts/SlideContext'

import line from './assets/line.svg'
import scrollimg from './assets/scroll.svg'

import styles from './styles.module.scss'

const SlideBar = () => {
  const { actualSlide, setActualSlide } = useContext(SlideContext)
  const [hide, setHide] = useState(false)
  const [scroll, setScroll] = useState(1)

  useEffect(() => {
    window.onscroll = () => setScroll(document.documentElement.scrollTop)
  }, [])

  return (
    <div className={styles.container}>
      <div
        className={
          scroll < 4050 ? styles.centerContainer : styles.scrollCenterContainer
        }
      >
        <div className={scroll < 4050 ? styles.scroll : styles.scrollHidden}>
          <Image src={scrollimg} alt="scroll" width={10} />
          <Image src={line} alt="Scroll" width={10} />
        </div>

        <div className={styles.slideMenu}>
          <div className={styles.columnContainer}>
            <div className={styles.text}>{actualSlide == 0 && 'Home'}</div>
            <div
              className={
                actualSlide == 0 ? styles.selected : styles.notSelected
              }
              onClick={() => {
                const element = document.getElementById('heroPage')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }

                setActualSlide(0)
              }}
            />
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.text}>
              {actualSlide == 1 ? 'About Us' : ''}
            </div>
            <div
              className={
                actualSlide == 1 ? styles.selected : styles.notSelected
              }
              onClick={() => {
                const element = document.getElementById('aboutUsPage')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }

                setActualSlide(1)
              }}
            />
          </div>

          <div className={styles.columnContainer}>
            <div className={styles.text}>
              {actualSlide == 2 && 'What We Do'}
            </div>
            <div
              className={
                actualSlide == 2 ? styles.selected : styles.notSelected
              }
              onClick={() => {
                const element = document.getElementById('whatWeDoPage')

                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
                setActualSlide(2)
              }}
            />
          </div>

          <div className={styles.columnContainer}>
            <div className={styles.text}>{actualSlide == 3 && 'Projects'}</div>

            <div
              className={
                actualSlide == 3 ? styles.selected : styles.notSelected
              }
              onClick={() => {
                const element = document.getElementById('projectsPage')

                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
                setActualSlide(3)
              }}
            />
          </div>

          <div className={styles.columnContainer}>
            <div className={styles.text}>{actualSlide == 4 && 'MetaMath'}</div>
            <div
              className={
                actualSlide == 4 ? styles.selected : styles.notSelected
              }
              onClick={() => {
                const element = document.getElementById('metamathPage')

                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
                setActualSlide(4)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideBar
