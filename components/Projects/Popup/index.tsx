import React from 'react'
import CTA, { CTAType } from '../../CTA'
import styles from './styles.module.scss'

export enum PopupType {
  PLANET_HORSE = 'PlanetHorse',
  MEGA_HYPED = 'MegaHyped',
  PORTALES = 'Portales',
  CHATR = 'Chatr',
}

interface ComponentType {
  type: PopupType
}

const Popup: React.FC<ComponentType> = (props: ComponentType) => {
  return (
    <div className={styles.container}>
      <div className={styles.popup}>
        <div className={styles.nav}>
          <div className={styles.title}>
            {props.type === 'PlanetHorse' && 'Planet Horse - Game'}
            {props.type === 'MegaHyped' && 'Mega Hyped - NFT Collection'}
            {props.type === 'Portales' && 'Portales - Cross-Bridge solution'}
            {props.type === 'Chatr' && 'ChatR - Private chat solution'}
          </div>
          <div className={styles.closeButton}>
            <img src="/images/close.svg" alt="Close icon" />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.sidebar}>
            <div className={styles.top}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(/images/Projects/Popup/${props.type}/banner.png)`,
                }}
              />
              <div className={styles.description}>
                {props.type === 'PlanetHorse' &&
                  'Planet Horse is a GameFi platform that leverages DeFi to aggregate value to the ecosystem, aiming to achieve a sustainable and fun experience. With minigames, collectibles, competitive gaming, and play-2-earn mechanics.'}
                {props.type === 'Chatr' && (
                  <>
                    Chatr is a private chat web extension that leverages
                    HOPR&apos;s mixnet to provide a secure and private way to
                    chat and send HOPR tokens. <br /> <br />
                    HOPR is an open incentivized mixnet that enables
                    privacy-preserving point-to-point data exchange. HOPR is
                    similar to TOR but decentralized and economically
                    sustainable.
                    <br /> <br />
                    Chatr is supported by the HOPR Association and will be
                    launched this year as an effort to popularize HOPR mixnet as
                    a mainstream substitute to TOR.
                  </>
                )}
                {props.type === 'MegaHyped' &&
                  'Conceptual artwork for a NFT collection using our authorial layered artwork generation scripts;'}
                {props.type === 'Portales' &&
                  `Portales is a Cross-Bridge solution for fast wrapping assets. Portales' long-term goal is to make 
                  off-chain event listeners (Oyentes) decentralized by incentivizing node maintainers with PORT tokens.`}
              </div>
            </div>
            <div className={styles.bottom}>
              {props.type === 'PlanetHorse' && (
                <CTA type={CTAType.VIEW} link="https://planethorse.me/" />
              )}
              {props.type === 'Portales' && (
                <>
                  <div className={styles.firstButton}>
                    <CTA
                      type={CTAType.VIEW}
                      link="https://portales-by-metamath.vercel.app/"
                    />
                  </div>
                  <CTA
                    type={CTAType.VIEW}
                    link="https://github.com/metamathstudios/portales-by-metamath"
                  />
                </>
              )}
              {props.type === 'Chatr' && (
                <>
                  <CTA
                    type={CTAType.VIEW}
                    link="https://github.com/metamathstudios/chatr-by-metamath"
                  />
                </>
              )}
            </div>
          </div>

          <div className={styles.inside}>
            {props.type === 'PlanetHorse' && (
              <div className={styles.planethorse}>
                <img
                  src="/images/Projects/Popup/PlanetHorse/city.png"
                  alt="Representation"
                />
                <div className={styles.description}>
                  Planet Horse is a GameFi platform that leverages DeFi to
                  aggregate value to the ecosystem, aiming to achieve a
                  sustainable and fun experience. With minigames, collectibles,
                  competitive gaming, and play-2-earn mechanics.
                </div>
              </div>
            )}

            {props.type === 'MegaHyped' && (
              <div className={styles.megahyped}>
                <div className={styles.nftCollection}>
                  <div className={styles.first}>
                    <div
                      className={styles.nft}
                      style={{
                        backgroundImage: `url(/images/Projects/Popup/${props.type}/NFT01.png)`,
                      }}
                    />
                    <div
                      className={styles.nft}
                      style={{
                        backgroundImage: `url(/images/Projects/Popup/${props.type}/NFT01.png)`,
                      }}
                    />
                    <div
                      className={styles.nft}
                      style={{
                        backgroundImage: `url(/images/Projects/Popup/${props.type}/NFT01.png)`,
                      }}
                    />
                  </div>
                  <div className={styles.second}>
                    <div
                      className={styles.nft}
                      style={{
                        backgroundImage: `url(/images/Projects/Popup/${props.type}/NFT01.png)`,
                      }}
                    />
                    <div
                      className={styles.nft}
                      style={{
                        backgroundImage: `url(/images/Projects/Popup/${props.type}/NFT01.png)`,
                      }}
                    />
                    <div
                      className={styles.nft}
                      style={{
                        backgroundImage: `url(/images/Projects/Popup/${props.type}/NFT01.png)`,
                      }}
                    />
                  </div>
                </div>
                <div className={styles.description}>
                  Mega Hyped: Conceptual artwork for a NFT collection using our
                  authorial layered artwork generation scripts;
                </div>
              </div>
            )}

            {props.type === 'Portales' && (
              <div className={styles.portales}>
                <div className={styles.demostration}>
                  <div className={styles.gif} />
                  <div className={styles.hackathon} />
                </div>
                <div className={styles.description}>
                  Portales is a Cross-Bridge solution for fast wrapping assets.
                  Portales&apos; long-term goal is to make off-chain event
                  listeners (Oyentes) decentralized by incentivizing node
                  maintainers with PORT tokens.
                </div>
              </div>
            )}

            {props.type === 'Chatr' && (
              <div className={styles.chatr}>
                <div className={styles.demostration}>
                  <div className={styles.app} />
                </div>
                <div className={styles.description}>
                  <span>
                    Chatr is a private chat web extension that leverages
                    HOPR&apos;s mixnet to provide a secure and private way to
                    chat and send HOPR tokens.
                  </span>
                  <br />
                  <br />
                  <span>
                    HOPR is an open incentivized mixnet that enables
                    privacy-preserving point-to-point data exchange. HOPR is
                    similar to TOR but decentralized and economically
                    sustainable.
                  </span>
                  <br />
                  <br />
                  <span>
                    Chatr is supported by the HOPR Association and will be
                    launched this year as an effort to popularize HOPR mixnet as
                    a mainstream substitute to TOR.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
