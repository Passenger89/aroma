import React from 'react'
import AddButton from '../AddButton/AddButton.jsx'
import './Card.scss'

const Card = ({ image, name, country, description, price, featured }) => {
  return (
    <div className='card flex column br-2 box-shadow'>
      <div className='image' style={{ backgroundImage: `url('${image}')` }}>
        {featured && <h4 className='uppercase fw-800 clr-white'>featured</h4>}
      </div>
      <div className='content gap'>
        <h2 className='clr-medium-roast fs-500'>{name}</h2>
        <h3>{country}</h3>
        <p className='clr-medium-roast fs-400'>{description}</p>
        <div className='flex space-betweenX'>
          <span className='price fs-500 fw-700 clr-gold-blend'>{price}</span>
          <AddButton />
        </div>
      </div>
    </div>
  )
}

export default Card
