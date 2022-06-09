import React from 'react'
import FeaturedCard from '../FeaturedCard/FeaturedCard.jsx'
import './FeaturedSection.scss'
import mellowRoast from '../../assets/images/beans/Beans - mellow.jpg'
import darkRoast from '../../assets/images/beans/Beans - dark.jpg'
import citrusRoast from '../../assets/images/beans/Beans - citrus.jpg'

const FeaturedSection = () => {
  return (
    <section className='section flex column gap'>
      <FeaturedCard
        image={mellowRoast}
        title='Mellow Roast'
        description='Hints of caramel and notes of chocolate.'
      />
      <FeaturedCard
        image={darkRoast}
        title='Dark Roast'
        description='Rich and deep. For the devotees looking for a coffee that can touch the soul and soothe the heart.'
      />
      <FeaturedCard
        image={citrusRoast}
        title='Citrus Roast'
        description='Fruity. A blackcurrant undertone with subtle notes of cranberry.'
      />
    </section>
  )
}

export default FeaturedSection
