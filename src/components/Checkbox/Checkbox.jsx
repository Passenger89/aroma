import React from 'react'
import './Checkbox.scss'

const Checkbox = () => {
  return (
    <div className='checkbox-container'>
      <label htmlFor='cb1'>Add</label>
      <input type='checkbox' id='cb1' />
    </div>
  )
}

export default Checkbox
