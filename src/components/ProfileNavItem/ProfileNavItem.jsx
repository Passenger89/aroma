import React from 'react'
import avatar from '../../assets/svgs/avatar.svg'
import { faker } from '@faker-js/faker'
import './ProfileNavItem.scss'

const ProfileNavItem = () => {
  return (
    <div className='profile-navItem-wrapper'>
      <div className='avatar'>
        <img className='br-3' src={faker.image.avatar() || 'John Doe'} alt='' />
      </div>
      <div className='profile-name'>
        <h2>{faker.name.findName()}</h2>
      </div>
    </div>
  )
}

export default ProfileNavItem
