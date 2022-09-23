import Image from 'next/image'

import styles from './styles.module.scss'

import arrow from './assets/arrow.svg'
import CTA, { CTAType } from '../../../CTA'

const MetaMath = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>
          Quality and safety <br />
          Hire our services
        </div>

        <div className={styles.description}>
          Lorem Ipsum is simply It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </div>

        <div className={styles.centerContainer}>
          <CTA 
            type={CTAType.REQUEST_SERVICES} 
            link='https://metamathstudios.com/services'
          />
        </div>

        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            © 2022 MetaMath &nbsp; <div style={{cursor: 'pointer'}}>Terms of Service</div>&nbsp;-&nbsp;<div style={{cursor: 'pointer'}}>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetaMath