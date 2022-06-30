import React from 'react'
import styles from './AddButton.module.scss'
import plus from '../../assets/svgs/plus.svg'

const AddButton = () => {
  return (
    <button className={`${styles.arrowButtonDown} br_1`}>
      <img src={plus} alt='' />
    </button>
  )
}

export default AddButton
