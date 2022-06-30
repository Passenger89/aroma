import React from 'react'
import * as BsIcons from 'react-icons/bs'
import styles from './GoogleButton.module.scss'

const GoogleButton = ({ label }) => {
  return (
    <button
      className={`${styles.googleButton} fs_400 fw_600 flex centeredY gap padded`}
    >
      <BsIcons.BsGoogle />
      {label}
    </button>
  )
}

export default GoogleButton
