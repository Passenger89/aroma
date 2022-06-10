import React from 'react'
import avatar from '../../assets/svgs/avatar.svg'
import './ProfileNavItem.scss'

const ProfileNavItem = () => {
  return (
    <div className='profile-navItem-wrapper'>
      <div className='avatar'>
        <img src={avatar} alt='' />
      </div>
      <div className='profile-name'>
        <h2>John Doe</h2>
      </div>
    </div>
  )
}

export default ProfileNavItem
