import React from 'react'
import Popup, { PopupType } from './Popup'
import styles from './styles.module.scss'

const ProjectsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Popup type={PopupType.MEGA_HYPED} />
    </div>
  )
}

export default ProjectsPage
