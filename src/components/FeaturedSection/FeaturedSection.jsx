import React from 'react'
import Card from '../Card/Card.jsx'
import './FeaturedSection.scss'
import mellowRoast from '../../assets/images/beans/Beans - mellow.jpg'
import darkRoast from '../../assets/images/beans/Beans - dark.jpg'
import citrusRoast from '../../assets/images/beans/Beans - citrus.jpg'

const FeaturedSection = () => {
  return (
    <section className='section flex column gap'>
      <h2 className='section-title fs-500 fw-600'>
        Here's what we've been drinking lately...
      </h2>

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
    </section>
  )
}

export default FeaturedSection
