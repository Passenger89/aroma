import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData.jsx'
import ProfileNavItem from '../ProfileNavItem/ProfileNavItem.jsx'
import { useClickOutside } from '../../Hooks/useClickOutside.jsx'
import * as HiIcons from 'react-icons/hi'
import './NavSideBar.scss'

const NavSideBar = ({ sidebar, toggleSidebar }) => {
  const sidebarRef = useClickOutside(toggleSidebar)
  return (
    <>
      <nav
        ref={sidebarRef}
        className={sidebar ? 'nav-menu active' : 'nav-menu'}
      >
        <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => {
            return (
              <li
                onClick={() => toggleSidebar(!sidebar)}
                key={index}
                className={item.className}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <HiIcons.HiMenuAlt2 onClick={() => toggleSidebar(!sidebar)} />
            </Link>
          </li>
        </ul>
        <ProfileNavItem />
      </nav>
    </>
  )
}

export default NavSideBar
