import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import ArrowButtonUp from '../ArrowButtonUp/ArrowButtonUp.jsx'
import menuIcon from '../../assets/svgs/menu-icon.svg'
import './NavBar.scss'

const NavBar = ({ pageName, toggleSidebar }) => {
  return (
    <div className='navBar bg-dark'>
      <div className='container'>
        <img src={menuIcon} alt='' onClick={toggleSidebar} />
        <h3 className='clr-white'>{pageName}</h3>
        <ScrollIntoView selector='header'>
          <ArrowButtonUp />
        </ScrollIntoView>
      </div>
    </div>
  )
}

export default NavBar
