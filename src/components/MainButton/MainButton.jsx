import React from 'react'
import styles from './MainButton.module.scss'

const MainButton = ({ label, disabled }) => {
  return (
    <button
      className={`${styles.mainButton} fs_400 fw_600 ${
        disabled ? 'disabled' : ''
      }`}
    >
      {label}
    </button>
  )
}

export default MainButton
