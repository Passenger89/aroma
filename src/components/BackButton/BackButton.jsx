import React from 'react'
import { Link } from 'react-router-dom'
import downArrow from '../../assets/svgs/down-arrow.svg'
import styles from './BackButton.module.scss'

const BackButton = ({ path }) => {
  return (
    <Link to={path}>
      <button className={`${styles.backButton} br_1`}>
        <img src={downArrow} alt='' />
      </button>
    </Link>
  )
}

export default BackButton
