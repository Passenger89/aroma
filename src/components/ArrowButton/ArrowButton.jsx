import React from 'react'
import downArrow from '../../assets/svgs/down-arrow.svg'
import './ArrowButton.scss'

const ArrowButton = () => {
  return (
    <button className='arrowButton br-1'>
      <img src={downArrow} alt='' />
    </button>
  )
}

export default ArrowButton
