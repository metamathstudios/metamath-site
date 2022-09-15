import React, { useRef } from 'react'
import { getHostname } from '../../utils'
import styles from './styles.module.scss'

export enum CTAType {
  REQUEST_SERVICES = 'request_services',
  LEARN_MORE = 'learn_more',
  VIEW = 'view',
}

interface ComponentType {
  type: CTAType
  link: string
}

const CTA: React.FC<ComponentType> = (props: ComponentType) => {
  const element = useRef<HTMLDivElement>(null)

  const animate = (type: string, buttonType: string) => {
    if (element.current) {
      switch (type) {
        case 'JOIN':
          if (!window.matchMedia('(max-width: 900px)').matches) {
            if (buttonType === 'request_services') {
              element.current.style.width = '237px'
              element.current.style.marginLeft = '0'
              element.current.style.marginRight = '79px'
            } else if (buttonType === 'learn_more') {
              element.current.style.width = '168px'
              element.current.style.marginLeft = '0'
              element.current.style.marginRight = '79px'
            } else if (buttonType === 'view') {
              element.current.style.width = '277px'
              element.current.style.marginLeft = '0'
              element.current.style.marginRight = '79px'
            }

            setTimeout(() => {
              if (element.current) {
                element.current.style.borderTopLeftRadius = '7px'
              }
            }, 200)
          }
          break

        case 'LEAVE':
          if (!window.matchMedia('(max-width: 900px)').matches) {
            setTimeout(() => {
              if (element.current) {
                element.current.style.borderTopLeftRadius = '0px'
              }
            }, 100)

            if (buttonType === 'request_services') {
              element.current.style.width = '0px'
              element.current.style.marginLeft = '158px'
              element.current.style.marginRight = '0'
            } else if (buttonType === 'learn_more') {
              element.current.style.width = '0px'
              element.current.style.marginLeft = '89px'
              element.current.style.marginRight = '0'
            } else if (buttonType === 'view') {
              element.current.style.width = '0px'
              element.current.style.marginLeft = '198px'
              element.current.style.marginRight = '0'
            }
          }
          break

        default:
          break
      }
    }
  }

  return (
    <>
      {props.type === 'request_services' && (
        <div
          className={styles.requestServices}
          onMouseEnter={() => {
            animate('JOIN', props.type)
          }}
          onMouseLeave={() => {
            animate('LEAVE', props.type)
          }}
        >
          <div className={styles.text}>REQUEST THIS SERVICE</div>
          <div className={styles.divisor} ref={element} />
          <div className={styles.arrow}>
            <img src="/images/arrow.svg" alt="Arrow" />
          </div>
        </div>
      )}

      {props.type === 'learn_more' && (
        <div
          className={styles.learnMore}
          onMouseEnter={() => {
            animate('JOIN', props.type)
          }}
          onMouseLeave={() => {
            animate('LEAVE', props.type)
          }}
        >
          <div className={styles.text}>LEARN MORE</div>
          <div className={styles.divisor} ref={element} />
          <div className={styles.arrow}>
            <img src="/images/arrow.svg" alt="Arrow" />
          </div>
        </div>
      )}

      {props.type === 'view' && (
        <div
          className={styles.view}
          onMouseEnter={() => {
            animate('JOIN', props.type)
          }}
          onMouseLeave={() => {
            animate('LEAVE', props.type)
          }}
          onClick={() => window.open(props.link)}
        >
          <div className={styles.text}>
            VIEW MORE ON {getHostname(props.link).toUpperCase()}
          </div>
          <div className={styles.divisor} ref={element} />
          <div className={styles.arrow}>
            <img src="/images/arrow.svg" alt="Arrow" />
          </div>
        </div>
      )}
    </>
  )
}

export default CTA
