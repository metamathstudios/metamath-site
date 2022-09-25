import GreenAboutCard from './components/AboutCards/Green'
import OrangeAboutCard from './components/AboutCards/Orange'
import PurpleAboutCard from './components/AboutCards/Purple'
import RedAboutCard from './components/AboutCards/Red'

import trust from './components/AboutCards/assets/trust.svg'
import design from './components/AboutCards/assets/design.svg'
import scalability from './components/AboutCards/assets/scalability.svg'
import performance from './components/AboutCards/assets/performance.svg'

import styles from './styles.module.scss'

const AboutUsContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSide}>
          <div className={styles.smallTitle}>
            About Us
          </div>

          <div className={styles.title}>
            We offer the best <div className={styles.thinTitle}> you can&nbsp;<span className={styles.gradient}>trust</span></div>
          </div>

          <div className={styles.text}>
          Focused on cutting-edge technology, MetaMath uses the best technologies and practices to create innovative blockchain solutions.
          </div>

         

          <div className={styles.text}>
          We abstract the complexity of interacting with the blockchain. Our mission is to create user-friendly applications to make the transition from conventional web applications to Web3 seamlessly and intuitive. Always focused on delivering the best experience to the endpoint client.
          </div>
        </div>
        
        <div className={styles.rightSide}>
          <div className={styles.cardsGrid}>
            <GreenAboutCard title='Trust' text='nim dis vulputate ut pharetra sit amet aliquam id diam maecenas ultrices mi' image={trust} />
            <OrangeAboutCard title='Design' text='nim dis vulputate ut pharetra sit amet aliquam id diam maecenas ultrices mi' image={design} />
            <PurpleAboutCard title='Scalability' text='nim dis vulputate ut pharetra sit amet aliquam id diam maecenas ultrices mi' image={scalability} />
            <RedAboutCard title='Performance' text='nim dis vulputate ut pharetra sit amet aliquam id diam maecenas ultrices mi' image={performance} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContent