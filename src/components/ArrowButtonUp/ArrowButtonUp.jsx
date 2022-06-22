import React from 'react'
import downArrow from '../../assets/svgs/down-arrow.svg'
import styles from './ArrowButtonUp.module.scss'

const ArrowButtonUp = () => {
  return (
    <button className={`${styles.arrowButtonUp} br-1`}>
      <img src={downArrow} alt='' />
    </button>
  )
}

export default ArrowButtonUp
