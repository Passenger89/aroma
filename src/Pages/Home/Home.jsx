import React from 'react'
import hero from '../../assets/images/hero.gif'
import barista from '../../assets/images/barista.jpg'
import './Home.scss'
import ArrowButton from '../../components/ArrowButton/ArrowButton.jsx'
import MainButton from '../../components/MainButton/MainButton.jsx'
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection.jsx'

const Home = () => {
  return (
    <div className='page_container flex column gap'>
      <div className='hero'>
        <img
          className='hero__image'
          src={hero}
          alt='coffee pouring into glass cup'
        />
        <div className='container flex column gap'>
          <h1 className='fs-500 fw-600'>Average Joe? Not exactly...</h1>
          <div className='content flex'>
            <div className='left flex column'>
              <p className='fs-300 fw-600'>
                Each bean is carefully sourced and lovingly brewed to bring
                nothing but perfection to your cup of coffee.
              </p>
              <ArrowButton />
            </div>
            <div className='right'>
              <img
                className='br-1'
                src={barista}
                alt='male barista pouring coffee'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container flex column gap'>
        <FeaturedSection />
        <MainButton label='The Collection' />
      </div>
    </div>
  )
}

export default Home
