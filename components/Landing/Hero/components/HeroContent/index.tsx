import Image from 'next/image'

import scroll from './assets/scroll.svg'
import line from './assets/line.svg'
import arrow from './assets/arrow.svg'

import styles from './styles.module.scss'

import SlideBar from './components/SlideMenu'

const HeroContent = () => {
  return (
    <div className={styles.centerColumnContainer}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.firstColumnContainer}>
            <Image src={scroll} alt='Scroll' width={10}/>
            <Image src={line} alt='Scroll' width={10}/>
          </div>

          <div className={styles.secondColumnContainer}>
            <div className={styles.title}>
              Taking WEB3 <br /> to the next level
            </div>
            <div className={styles.subTitle}>
              DEVELOPING FRESH AND INNOVATE TOOLS FOR BLOCKCHAIN.
            </div>
            
            <div className={styles.buttonContainer}>
              <div className={styles.button}>
                <div className={styles.buttonText}>
                  REQUEST OUR SERVICES
                </div>
                <div className={styles.buttonArrow}>
                  <Image src={arrow} alt='Arrow' width={8} />
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className={styles.slidebarContainer}>
            <SlideBar />
          </div>
      </div>
    </div>
  )
}

export default HeroContent