import React from 'react'
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch.jsx'

const Notifications = () => {
  return (
    <div className='container margin_block flex column'>
      <div className='flex centeredY gap'>
        <p>Would you like to hear from us?</p>
        <ToggleSwitch Name='newsletter' />
      </div>
      <div className='flex centeredY gap'>
        <p>Hungry?</p>
        <ToggleSwitch Name='hungry' />
      </div>
      <div className='flex centeredY gap'>
        <p>Wanna grab something to eat?</p>
        <ToggleSwitch Name='go eat' />
      </div>
    </div>
  )
}

export default Notifications
