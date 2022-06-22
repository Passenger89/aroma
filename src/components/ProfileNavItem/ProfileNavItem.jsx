import React from 'react'
import avatar from '../../assets/svgs/avatar.svg'
import { faker } from '@faker-js/faker'
import styles from './ProfileNavItem.module.scss'

const ProfileNavItem = () => {
  return (
    <div className={`${styles.profile__wrapper} flex gap`}>
      <div className={styles.avatar}>
        <img className='br-3' src={faker.image.avatar() || avatar} alt='' />
      </div>
      <div className={styles.profile__name}>
        <h2>{faker.name.findName() || 'John Doe'}</h2>
      </div>
    </div>
  )
}

export default ProfileNavItem
