import Image from 'next/image'

import styles from './styles.module.scss'

import nft from './assets/nft.svg'
import sc from './assets/sc.svg'
import smartphone from './assets/smartphone.svg'

import { useState } from 'react'

const OptionsCard = () => {
  const [option, setOption] = useState(nft)
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Some of our services
      </div>

      <div className={styles.centerContainer}>
        <div className={styles.imageContainer}>
          <Image src={option} alt='Services' width={300} height={300}/>
        </div>
      </div>

      <div className={styles.titleContainer}>
        Titulo
      </div>

      <div className={styles.descriptionContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique harum quo
      </div>

      <div className={styles.optionsContainer}>
        <div className={styles.options} onClick={() => setOption(nft)}></div>
        <div className={styles.options} onClick={() => setOption(sc)}></div>
        <div className={styles.options} onClick={() => setOption(smartphone)}></div>
      </div>
    </div>
  )
}

export default OptionsCard