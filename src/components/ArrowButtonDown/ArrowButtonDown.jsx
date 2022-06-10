import React from 'react'
import downArrow from '../../assets/svgs/down-arrow.svg'
import './ArrowButtonDown.scss'

const ArrowButtonDown = () => {
  return (
    <button className='arrowButtonDown br-1'>
      <img src={downArrow} alt='' />
    </button>
  )
}

export default ArrowButtonDown
