/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react'
import { FullPage, Slide } from 'react-full-page'
import { ServicesPageContext } from '../../../contexts/ServicesPage'
import CTA, { CTAType } from '../../CTA'
import { data } from '../data'
import styles from './styles.module.scss'

interface SlideDataType {
  from: number
  to: number
}

const Content: React.FC = () => {
  const { setServiceSlide } = useContext(ServicesPageContext)

  const calculateOpacity = (element: HTMLElement, multipliy: number) => {
    return (
      (
        100 -
        Math.abs(
          1 -
            (element.scrollHeight - element.getBoundingClientRect().top) /
              element.scrollHeight
        ) *
          100 *
          multipliy
      ).toFixed(2) + '%'
    )
  }

  useEffect(() => {
    window.addEventListener(
      'scroll',
      function (event) {
        const smart_contract_element = document.getElementById('smart_contract')
        const decentralized_apps_element =
          document.getElementById('decentralized_apps')
        const nft_art_generation_element =
          document.getElementById('nft_art_generation')
        const security_audit_element = document.getElementById('security_audit')
        const economic_research_consulting_element = document.getElementById(
          'economic_research_consulting'
        )

        if (
          smart_contract_element &&
          decentralized_apps_element &&
          nft_art_generation_element &&
          security_audit_element &&
          economic_research_consulting_element
        ) {
          var multiplay = 5

          if (window.matchMedia('(max-width: 900px)').matches) {
            multiplay = 0
          } else {
            multiplay = 5
          }

          smart_contract_element.style.opacity = calculateOpacity(
            smart_contract_element,
            multiplay
          )

          decentralized_apps_element.style.opacity = calculateOpacity(
            decentralized_apps_element,
            multiplay
          )

          nft_art_generation_element.style.opacity = calculateOpacity(
            nft_art_generation_element,
            multiplay
          )

          security_audit_element.style.opacity = calculateOpacity(
            security_audit_element,
            multiplay
          )

          economic_research_consulting_element.style.opacity = calculateOpacity(
            economic_research_consulting_element,
            multiplay
          )
        }
      },
      false
    )
  })

  return (
    <div className={styles.content} id="content">
      <FullPage
        duration={800}
        afterChange={(data: SlideDataType) => setServiceSlide(data.to)}
      >
        {data.map((value, index) => {
          return (
            <Slide key={index}>
              <section className={styles.columns} id={value.id}>
                <div className={styles.leftColumn}>
                  <div className={styles.text}>
                    <div className={styles.title}>
                      <div className={styles.image}>
                        <img
                          src={`/images/Services/${value.icon}.svg`}
                          alt="Icon"
                        />
                      </div>
                      <div className={styles.titleText}>
                        <span>{value.title}</span>
                      </div>
                    </div>
                    <div className={styles.description}>
                      {value.description}
                    </div>
                    <div className={styles.desktopCTA}>
                      <CTA
                        type={CTAType.REQUEST_SERVICES}
                        link="https://google.com.br"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.rightColumn}>
                  <img
                    src={`/images/Services/${value.image}.svg`}
                    alt="Image"
                  />
                  <div className={styles.mobileCTA}>
                    <CTA
                      type={CTAType.REQUEST_SERVICES}
                      link="https://google.com.br"
                    />
                  </div>
                </div>
              </section>
            </Slide>
          )
        })}
      </FullPage>
    </div>
  )
}

export default Content
