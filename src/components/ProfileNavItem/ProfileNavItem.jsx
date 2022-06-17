import React from 'react'
import avatar from '../../assets/svgs/avatar.svg'
import { faker } from '@faker-js/faker'
import './ProfileNavItem.scss'

const ProfileNavItem = () => {
  return (
    <div className='profile-navItem-wrapper flex gap'>
      <div className='avatar'>
        <img className='br-3' src={faker.image.avatar() || avatar} alt='' />
      </div>
      <div className='profile-name'>
        <h2>{faker.name.findName() || 'John Doe'}</h2>
      </div>
    </div>
  )
}

export default ProfileNavItem
