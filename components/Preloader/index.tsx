import Image from 'next/image'

import styles from './styles.module.scss'

import logo from './assets/logo.svg'

const Preloader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt='MetaMath' />
        </div>
      </div>
    </div>
  )
}

export default Preloader