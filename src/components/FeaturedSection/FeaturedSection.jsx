import React from 'react'
import useIsDesktop from '../../Hooks/useIsDesktop.jsx'
import Card from '../Card/Card.jsx'
import styles from './FeaturedSection.module.scss'
import mellowRoast from '../../assets/images/beans/Beans - mellow.jpg'
import darkRoast from '../../assets/images/beans/Beans - dark.jpg'
import citrusRoast from '../../assets/images/beans/Beans - citrus.jpg'

const FeaturedSection = () => {
  const isDesktop = useIsDesktop()
  return (
    <section className={`${styles.section} flex column gap`}>
      <h2 className='section-title fs_500 fw_600'>
        Here's what we've been drinking lately...
      </h2>

      <div className={`flex ${isDesktop ? '' : 'column'} gap`}>
        <Card
          image={mellowRoast}
          name='Mellow Roast'
          country='Colombia'
          description='Hints of caramel and notes of chocolate.'
          price={`£7.50`}
          featured
        />
        <Card
          image={darkRoast}
          name='Dark Roast'
          country='Mexico'
          description='Rich and deep. For the devotees looking for a coffee that can touch the soul.'
          price={`£7.50`}
          featured
        />
        <Card
          image={citrusRoast}
          name='Citrus Roast'
          country='Thailand'
          description='Fruity. A blackcurrant undertone with subtle notes of cranberry.'
          price={`£7.50`}
          featured
        />
      </div>
    </section>
  )
}

export default FeaturedSection
