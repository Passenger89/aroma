import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { usePathName } from '../../Hooks/usePathName.jsx'
import ArrowButtonUp from '../ArrowButtonUp/ArrowButtonUp.jsx'
import menuIcon from '../../assets/svgs/menu-icon.svg'
import './NavBar.scss'

const NavBar = ({ sidebar, toggleSidebar }) => {
  const pathname = usePathName()
  return (
    <div className='navBar bg-dark'>
      <div className='container'>
        <img src={menuIcon} alt='' onClick={() => toggleSidebar(!sidebar)} />
        <h3 className='clr-white'>{pathname}</h3>
        <ScrollIntoView selector='header'>
          <ArrowButtonUp />
        </ScrollIntoView>
      </div>
    </div>
  )
}

export default NavBar
