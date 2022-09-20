import Image from 'next/image'
import CTA, { CTAType } from '../../../../../CTA'

import arrow from './assets/arrow.svg'
import scrollArrow from './assets/scrollArrow.svg'

import styles from './styles.module.scss'

const HeroContent = () => {
  return (
    <div className={styles.centerColumnContainer}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>

          <div className={styles.secondColumnContainer}>
            <div className={styles.title}>
              Taking WEB3 <br /> to the next level
            </div>
            <div className={styles.subTitle}>
              DEVELOPING FRESH AND INNOVATE TOOLS FOR BLOCKCHAIN.
            </div>
            
            <div className={styles.buttonMobileCenter}>
              <CTA
                type={CTAType.REQUEST_SERVICES}
                link="https://google.com.br"
              />
            </div>

            <div className={styles.mobileArrowCenter}>
              <div className={styles.mobileScrollArrow}>
                <Image src={scrollArrow} height={150} alt='Scroll' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent