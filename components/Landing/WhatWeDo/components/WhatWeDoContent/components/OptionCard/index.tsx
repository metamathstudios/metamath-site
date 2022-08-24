import Image from 'next/image'

import styles from './styles.module.scss'

import nft from './assets/nft.svg'
import { useState } from 'react'

const OptionsCard = () => {
  const [option, setOption] = useState(1)

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Some of our services
      </div>

      <div className={styles.imageContainer}>
        <Image src={option == 1 ? nft : null} alt='Services' width={300}/>
      </div>

      <div className={styles.titleContainer}>
        Titulo
      </div>

      <div className={styles.descriptionContainer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique harum quo
      </div>

      <div className={styles.optionsContainer}>
        <div className={styles.options} onClick={() => setOption(1)}></div>
        <div className={styles.options} onClick={() => setOption(2)}></div>
        <div className={styles.options} onClick={() => setOption(3)}></div>
      </div>
    </div>
  )
}

export default OptionsCard