import React from 'react'
import { Link } from 'react-router-dom'
import downArrow from '../../assets/svgs/down-arrow.svg'
import './BackButton.scss'

const BackButton = ({ path }) => {
  return (
    <Link to={path}>
      <button className='backButton br-1'>
        <img src={downArrow} alt='' />
      </button>
    </Link>
  )
}

export default BackButton
