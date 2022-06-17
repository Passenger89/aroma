import React from 'react'
import './ToggleSwitch.scss'

const ToggleSwitch = ({ Name }) => {
  return (
    <div className='toggle-switch'>
      <input
        className='toggle-switch-checkbox'
        type='checkbox'
        name={Name}
        id={Name}
      />
      <label htmlFor={Name} className='toggle-switch-label'>
        <span className='toggle-switch-inner' data-yes='yes' data-no='no' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  )
}

export default ToggleSwitch
