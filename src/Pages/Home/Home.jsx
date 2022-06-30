import React from 'react'
import useIsDesktop from '../../Hooks/useIsDesktop.jsx'
import ScrollIntoView from 'react-scroll-into-view'
import hero from '../../assets/images/hero.gif'
import barista from '../../assets/images/barista.jpg'
import styles from './Home.module.scss'
import ArrowButtonDown from '../../components/ArrowButtonDown/ArrowButtonDown.jsx'
import MainButton from '../../components/MainButton/MainButton.jsx'
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  const isDesktop = useIsDesktop()
  return (
    <div className='margin_bottom flex column gap'>
      <div className={styles.hero}>
        <div className={styles.hero__image_wrapper}>
          <img
            className={styles.hero__image}
            src={hero}
            alt='coffee pouring into glass cup'
          />
        </div>
        <div className={`${styles.hero__container} flex column gap container`}>
          <h1
            className={`${styles.hero__heading} ${
              isDesktop ? 'fs_700 fw_600' : 'fs_600 fw_600'
            }  margin_block`}
          >
            Average Joe? Not exactly...
          </h1>
          <div className={`flex margin_block`}>
            <div className={`${styles.content__left} flex centeredX`}>
              <div className='flex column gap' style={{ width: '80%' }}>
                <p
                  className={`${styles.left__text} ${
                    isDesktop ? 'fs_500' : 'fs_300'
                  } fw_500 clr_medium_roast`}
                >
                  Each bean is carefully sourced and lovingly brewed to bring
                  nothing but perfection to your cup of coffee.
                </p>
                <ScrollIntoView selector='#featured'>
                  <ArrowButtonDown />
                </ScrollIntoView>
              </div>
            </div>
            <div className={styles.content__right}>
              <img
                className='br_1'
                src={barista}
                alt='male barista pouring coffee'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container flex column gap' id='featured'>
        <FeaturedSection />
        <Link to={'/Store'} style={{ display: 'contents' }}>
          <MainButton label='The Collection' />
        </Link>
      </div>
    </div>
  )
}

export default Home
