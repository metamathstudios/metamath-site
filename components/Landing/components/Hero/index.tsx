import HeroContent from './components/HeroContent'
import Navbar from './components/Navbar'
import styles from './styles.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.planetContainer}>
        <Navbar />
        <HeroContent />
      </div>
    </div>
  )
}

export default Hero