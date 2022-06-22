import React from 'react'
import styles from './MainButton.module.scss'

const MainButton = ({ label, disabled }) => {
  return (
    <button
      className={`${styles.mainButton} fs-400 fw-600 ${
        disabled ? 'disabled' : ''
      }`}
    >
      {label}
    </button>
  )
}

export default MainButton
