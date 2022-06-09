import React from 'react'
import menuIcon from '../../assets/svgs/menu-icon.svg'
import './NavBar.scss'

const NavBar = ({ pageName }) => {
  return (
    <div className='navBar bg-dark'>
      <div className='container'>
        <img src={menuIcon} alt='' />
        <h3 className='clr-white'>{pageName}</h3>
      </div>
    </div>
  )
}

export default NavBar
