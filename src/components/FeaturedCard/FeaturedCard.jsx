import React from 'react'
import './FeaturedCard.scss'

const FeaturedCard = ({ title, description, image }) => {
  console.log(image)
  return (
    <div className='card flex column br-2'>
      <div className='image' style={{ backgroundImage: `url('${image}')` }}>
        <h4 className='uppercase fw-800 clr-white'>featured</h4>
      </div>
      <div className='content gap'>
        <h2 className='clr-medium-roast fs-500'>{title}</h2>
        <p className='clr-medium-roast fs-400'>{description}</p>
      </div>
    </div>
  )
}

export default FeaturedCard
