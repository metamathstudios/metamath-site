import Image from 'next/image'

import scroll from './assets/scroll.svg'

import styles from './styles.module.scss'

const HeroContent = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.container}>
        <div className={styles.firstColumnContainer}>
          <Image src={scroll} alt='Scroll' width={10}/>
        </div>

        <div className={styles.secondColumnContainer}>
          <div className={styles.title}>
            Taking WEB3 <br /> to the next level
          </div>
        </div>

        <div className={styles.thirdColumnContainer}>
          Home
        </div>
      </div>
    </div>
  )
}

export default HeroContent