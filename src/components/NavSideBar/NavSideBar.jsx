import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as HiIcons from 'react-icons/hi'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData.jsx'
import './NavSideBar.scss'
import ProfileNavItem from '../ProfileNavItem/ProfileNavItem.jsx'

const NavSideBar = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <HiIcons.HiMenuAlt2 onClick={toggleSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <HiIcons.HiMenuAlt2 />
            </Link>
          </li>
        </ul>
        <ProfileNavItem />
      </nav>
    </>
  )
}

export default NavSideBar
