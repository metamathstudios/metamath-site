import { useState } from 'react'
import { PopupContext } from '../../../../contexts/PopupContext'
import Popup, { PopupType } from '../../../Popup'
import ProjectsContent from './components/ProjectsContent'

import styles from './styles.module.scss'

const Projects = () => {
  const [popup, setPopup] = useState('')

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      <div className={styles.container}>
        <ProjectsContent />
        {popup === 'portales' && <Popup type={PopupType.PORTALES} />}
        {popup === 'chatr' && <Popup type={PopupType.CHATR} />}
        {popup === 'planethorse' && <Popup type={PopupType.PLANET_HORSE} />}
        {popup === 'megahyped' && <Popup type={PopupType.MEGA_HYPED} />}
      </div>
    </PopupContext.Provider>
  )
}

export default Projects
