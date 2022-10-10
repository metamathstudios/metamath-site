import GreenAboutCard from './components/AboutCards/Green'
import OrangeAboutCard from './components/AboutCards/Orange'
import PurpleAboutCard from './components/AboutCards/Purple'
import RedAboutCard from './components/AboutCards/Red'

import trust from './components/AboutCards/assets/trust.svg'
import design from './components/AboutCards/assets/design.svg'
import scalability from './components/AboutCards/assets/scalability.svg'
import performance from './components/AboutCards/assets/performance.svg'

import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, { Autoplay, Navigation } from 'swiper'
import 'swiper/css/navigation'
import styles from './styles.module.scss'
import { useState } from 'react'

const AboutUsContent = () => {
  SwiperCore.use([Autoplay])

  const [active, setActive] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSide}>
          <div className={styles.smallTitle}>
            About Us
          </div>

          <div className={styles.title}>
            We offer solutions <div className={styles.thinTitle}> you can&nbsp;<span className={styles.gradient}>trust</span></div>
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
            <GreenAboutCard title='Trust' text='Professionals focused on Security and best testing Practices' image={trust} />
            <OrangeAboutCard title='Design' text='Top-notch design, improved for user experience and usability' image={design} />
            <PurpleAboutCard title='Scalability' text='Tools that scale on demand with high maintainability and extensibility' image={scalability} />
            <RedAboutCard title='Performance' text='Proved performant services, for high demand and high confiability' image={performance} />
          </div>

          <div className={styles.mobileCardsGrid}>
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true
              }}
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>            
                <GreenAboutCard title='Trust' text='Professionals focused on Security and best testing Practices' image={trust} />
              </SwiperSlide>

              <SwiperSlide>            
                <OrangeAboutCard title='Design' text='Top-notch design, improved for user experience and usability' image={design} />
              </SwiperSlide>

              <SwiperSlide>            
                <PurpleAboutCard title='Scalability' text='Tools that scale on demand with high maintainability and extensibility' image={scalability} />
              </SwiperSlide>

              <SwiperSlide>            
                <RedAboutCard title='Performance' text='Proved performant services, for high demand and high confiability' image={performance} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContent