import Image from 'next/image'

import styles from './styles.module.scss'

import arrow from './assets/arrow.svg'
import OptionsCard from './components/OptionCard'

const WhatWeDoContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSideContainer}>
          <div className={styles.smallTitle}>
            What We Do
          </div>

          <div className={styles.title}>
            why choose <div className={styles.thinTitle}><span className={styles.gradient}>metamath</span></div>
          </div>

          <div className={styles.text}>
            Experieced in Smart Contract develompment, on and off-chain data processing, and analysis, our skills cover all steps towards developing your product. From back-end architectures to frond-end development, UI/UX development, UI/UX development, test and quality assurance, and after scale support services.
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <div className={styles.buttonText}>
                LEARN MORE
              </div>
              <div className={styles.buttonArrow}>
                <Image src={arrow} alt='Arrow' width={8} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightSideContainer}>
          <div className={styles.columnContainer}>
            <div className={styles.optionsCardContainer}>
              <OptionsCard />
            </div>
          </div>
        </div>

        <div className={styles.centerButtonContainer}>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <div className={styles.buttonText}>
                LEARN MORE
              </div>
              <div className={styles.buttonArrow}>
                <Image src={arrow} alt='Arrow' width={8} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WhatWeDoContent