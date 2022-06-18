import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { usePathName } from '../../Hooks/usePathName.jsx'
import ArrowButtonUp from '../ArrowButtonUp/ArrowButtonUp.jsx'
import BackButton from '../BackButton/BackButton.jsx'
import menuIcon from '../../assets/svgs/menu-icon.svg'
import './NavBar.scss'

const NavBar = ({ sidebar, toggleSidebar }) => {
  const pathname = usePathName()
  const renderSwitch = param => {
    switch (param) {
      case 'Settings':
        return <BackButton path='/' />

      case 'Account':
        return <BackButton path='/Settings' />

      case 'Notifications':
        return <BackButton path='/Settings' />

      case 'Help':
        return <BackButton path='/Settings' />

      default:
        return (
          <ScrollIntoView selector='header'>
            <ArrowButtonUp />
          </ScrollIntoView>
        )
    }
  }
  return (
    <div className='navBar bg-dark'>
      <div className='container'>
        <img src={menuIcon} alt='' onClick={() => toggleSidebar(!sidebar)} />
        <h3 className='clr-white'>{pathname}</h3>

        {renderSwitch(pathname)}
      </div>
    </div>
  )
}

export default NavBar
