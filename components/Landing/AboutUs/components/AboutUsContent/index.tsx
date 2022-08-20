import AboutCard from './components/AboutCard'

import trust from './components/AboutCard/assets/trust.svg'
import design from './components/AboutCard/assets/design.svg'
import scalability from './components/AboutCard/assets/scalability.svg'
import performance from './components/AboutCard/assets/performance.svg'

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
            We offer the best <div className={styles.thinTitle}> you can&nbsp;<div className={styles.gradient}>trust</div></div>
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
            <AboutCard title='Trust' text='nim dis vulputate ut pharetra sit amet aliquam id diam maecenas ultrices mi' image={trust} />
            <AboutCard title='Design' text='nim dis vulputate ut pharetra sit amet aliquam id diam maecenas ultrices mi' image={design} />
            <AboutCard title='Scalability' text='nim dis vulputate ut pharetra sit amet aliquam id diam maecenas ultrices mi' image={scalability} />
            <AboutCard title='Performance' text='nim dis vulputate ut pharetra sit amet aliquam id diam maecenas ultrices mi' image={performance} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContent