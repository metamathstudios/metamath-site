import Image from 'next/image'

import logo from './assets/logo.svg'
import menu from './assets/menu.svg'

import styles from './styles.module.scss'

const Navbar = () => {
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt='Logo' width={140}/>
        </div>
        <div className={styles.menuContainer}>
          <Image src={menu} alt='Menu' width={25}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar