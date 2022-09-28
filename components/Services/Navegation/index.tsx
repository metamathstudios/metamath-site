import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { ServicesPageContext } from '../../../contexts/ServicesPage'
import { SidebarContext } from '../../../contexts/Sidebar'
import Back from './assets/back.svg'
import Logo from './assets/logo.svg'
import Sidebar from './assets/sidebar.svg'
import styles from './styles.module.scss'

const Navegation: React.FC = () => {
  const route = useRouter()
  const { serviceSlide, setServiceSlide } = useContext(ServicesPageContext)
  const { openSidebar } = useContext(SidebarContext)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo} onClick={() => route.push('/')}>
          <div className={styles.logoDesktop}>
            <Image src={Logo} alt="Logo" />
          </div>
          <div className={styles.logoMobile}>
            <Image src={Back} alt="Back" />
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.titleDesktop}>
            <h1>OUR SERVICES</h1>
          </div>
          <div className={styles.titleMobile} onClick={() => route.push('/')}>
            <Image src={Logo} alt="Logo" />
          </div>
        </div>
        <div className={styles.sidebar}>
          <Image src={Sidebar} alt="Sidebar" onClick={() => openSidebar()} />
        </div>
      </div>
      <div className={styles.navegation}>
        <div
          className={styles.ball}
          style={
            serviceSlide === 0
              ? { backgroundColor: '#41afff' }
              : { backgroundColor: '#fff' }
          }
          onClick={() => {
            const element = document.getElementById('smart_contract')

            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />
        <div
          className={styles.ball}
          style={
            serviceSlide === 1
              ? { backgroundColor: '#41afff' }
              : { backgroundColor: '#fff' }
          }
          onClick={() => {
            const element = document.getElementById('decentralized_apps')

            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />
        <div
          className={styles.ball}
          style={
            serviceSlide === 2
              ? { backgroundColor: '#41afff' }
              : { backgroundColor: '#fff' }
          }
          onClick={() => {
            const element = document.getElementById('nft_art_generation')

            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />
        <div
          className={styles.ball}
          style={
            serviceSlide === 3
              ? { backgroundColor: '#41afff' }
              : { backgroundColor: '#fff' }
          }
          onClick={() => {
            const element = document.getElementById('security_audit')

            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />
        <div
          className={styles.ball}
          style={
            serviceSlide === 4
              ? { backgroundColor: '#41afff' }
              : { backgroundColor: '#fff' }
          }
          onClick={() => {
            const element = document.getElementById(
              'economic_research_consulting'
            )

            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />
      </div>
    </>
  )
}

export default Navegation
