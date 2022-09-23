import React from 'react'
import Sidebar from '../Sidebar'
import Background from './Background'
import Content from './Content'
import Navegation from './Navegation'

import styles from './styles.module.scss'

const ServicesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navegation />
      <Content />
      <Sidebar />
      <Background />
    </div>
  )
}

export default ServicesPage
