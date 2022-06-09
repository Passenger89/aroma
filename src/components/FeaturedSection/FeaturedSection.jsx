import React from 'react'
import FeaturedCard from '../FeaturedCard/FeaturedCard.jsx'
import './FeaturedSection.scss'

const FeaturedSection = () => {
  return (
    <section className='section flex column gap'>
      <FeaturedCard
        title='Mellow Roast'
        description='Hints of caramel and notes of chocolate.'
      />
      <FeaturedCard
        title='Dark Roast'
        description='Rich and deep. For the devotees looking for a coffee that can touch the soul and soothe the heart.'
      />
      <FeaturedCard
        title='Citrus Roast'
        description='Fruity. A blackcurrant undertone with subtle notes of cranberry.'
      />
    </section>
  )
}

export default FeaturedSection
