import Module from 'module'
import styles from './styles.module.scss'

type cardProps = {
  image: HTMLImageElement,
  title: string,
  text: string,
}

const AboutCard = ({...props}: cardProps) => {
  return (
    <div className={styles.container}>

    </div>
  )
}

export default AboutCard