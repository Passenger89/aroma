import React, { useEffect, useState } from 'react'
import avatar from '../../assets/svgs/avatar.svg'
import { faker } from '@faker-js/faker'
import styles from './ProfileNavItem.module.scss'

const ProfileNavItem = () => {
  const [name, setName] = useState('John Doe')
  const [avatar, setAvatar] = useState(avatar)

  useEffect(() => {
    setName(faker.name.findName())
    setAvatar(faker.image.avatar())
  }, [])

  return (
    <div className={`${styles.profile__wrapper} flex gap`}>
      <div className={styles.avatar}>
        <img className='br_3' src={avatar} alt='' />
      </div>
      <div className={styles.profile__name}>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default ProfileNavItem
