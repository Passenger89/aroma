import React from 'react'
import './AddButton.scss'
import plus from '../../assets/svgs/plus.svg'

const AddButton = () => {
  return (
    <button className='arrowButtonDown br-1'>
      <img src={plus} alt='' />
    </button>
  )
}

export default AddButton
