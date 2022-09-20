import Image from 'next/image'

import styles from './styles.module.scss'

import nft from './assets/nft.svg'
import sc from './assets/sc.svg'
import smartphone from './assets/smartphone.svg'

import { useState } from 'react'

const OptionsCard = () => {
  const [option, setOption] = useState(nft)
  const [selected, setSelected] = useState(1)
  
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
        {option == nft ? 'NFT Art Generation' : null}
        {option == sc ? 'Smart Contracts' : null}
        {option == smartphone ? 'Descentralized Apps' : null}
      </div>

      <div className={styles.descriptionContainer}>
        {option == nft ? 
          'Pioneering NFT Art Generation programmatically, you will count on what is more recent in art generation technology. From Al-generated art to procedurally generated NFTs. We will help you launch your NFT collection following the best market standards so you can go from idea to market in no time.'
        : null}

        {option == sc ? 
          'Following Ethereum Smart Contract best practices, our Solidity-based programs can be replicated in any EVM-compatible network such as Polygon, Binance Smart Chain, Harmony ONE, Avalanche, Moonbeam/Moonriver, Gnosis Chain, and many others. Our Smart Contracts are battle-tested and carefully tailored to satisfy any specific prerequisites.'
        : null}

        {option == smartphone ? 
          'We provide all services necessary to bring your decentralized app up and running, from Ul design to backend infrastructure. We will manage all the steps to get your idea to life. Already have an App and want to plug it into a blockchain? We provide you with the tools to do so!'
        : null}
      </div>

      <div className={styles.optionsContainer}>
        <div className={selected == 1 ? styles.selectedOptions : styles.options} onClick={() => (setOption(nft), setSelected(1))}></div>
        <div className={selected == 2 ? styles.selectedOptions : styles.options} onClick={() => (setOption(sc), setSelected(2))}></div>
        <div className={selected == 3 ? styles.selectedOptions : styles.options} onClick={() => (setOption(smartphone), setSelected(3))}></div>
      </div>
    </div>
  )
}

export default OptionsCard