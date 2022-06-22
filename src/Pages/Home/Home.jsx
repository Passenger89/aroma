import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import hero from '../../assets/images/hero.gif'
import barista from '../../assets/images/barista.jpg'
import styles from './Home.module.scss'
import ArrowButtonDown from '../../components/ArrowButtonDown/ArrowButtonDown.jsx'
import MainButton from '../../components/MainButton/MainButton.jsx'
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='margin-bottom flex column gap'>
      <div className={styles.hero}>
        <img
          className='hero__image'
          src={hero}
          alt='coffee pouring into glass cup'
        />
        <div className={`${styles.container} flex column gap`}>
          <h1 className='fs-600 fw-600'>Average Joe? Not exactly...</h1>
          <div className={`${styles.content} flex`}>
            <div className={`${styles.left} flex column`}>
              <p className='fs-300 fw-500 clr-medium-roast'>
                Each bean is carefully sourced and lovingly brewed to bring
                nothing but perfection to your cup of coffee.
              </p>
              <ScrollIntoView selector='#featured'>
                <ArrowButtonDown />
              </ScrollIntoView>
            </div>
            <div className={styles.right}>
              <img
                className='br-1'
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
