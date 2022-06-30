import React from 'react'
import downArrow from '../../assets/svgs/down-arrow.svg'
import styles from './ArrowButtonDown.module.scss'

const ArrowButtonDown = () => {
  return (
    <button className={`${styles.arrowButtonDown} br_1`}>
      <img src={downArrow} alt='' />
    </button>
  )
}

export default ArrowButtonDown
