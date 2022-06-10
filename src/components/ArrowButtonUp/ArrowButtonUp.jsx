import React from 'react'
import downArrow from '../../assets/svgs/down-arrow.svg'
import './ArrowButtonUp.scss'

const ArrowButtonUp = () => {
  return (
    <button className='arrowButtonUp br-1'>
      <img src={downArrow} alt='' />
    </button>
  )
}

export default ArrowButtonUp
