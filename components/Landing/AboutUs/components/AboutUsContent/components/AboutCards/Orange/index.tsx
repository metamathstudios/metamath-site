import Image from 'next/image'
import styles from './styles.module.scss'

type cardProps = {
  image: HTMLImageElement,
  title: string,
  text: string,
}

const OrangeAboutCard = ({...props}: cardProps) => {
  return (
    <div className={styles.orangeContainer}>
      <div className={styles.paddingContainer}>
        <div className={styles.imageContainer}>
          <Image src={props.image} alt='Image' width={35}/>
        </div>

        <div className={styles.titleContainer}>
          {props.title}
        </div>

        <div className={styles.textContainer}>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default OrangeAboutCard