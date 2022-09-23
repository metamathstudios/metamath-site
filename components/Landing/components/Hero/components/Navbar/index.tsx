import Image from 'next/image'
import { useContext } from 'react'
import { SidebarContext } from '../../../../../../contexts/Sidebar'

import logo from './assets/logo.svg'
import menu from './assets/menu.svg'

import styles from './styles.module.scss'

const Navbar = () => {
  const { openSidebar } = useContext(SidebarContext)

  return (
    <div className={styles.fixedContainer}>
      <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
          <a href='#heroPage'><Image src={logo} alt='Logo' width={140}/></a>
        </div>
        <div className={styles.menuContainer} onClick={openSidebar}>
          <Image src={menu} alt='Menu' width={25}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar