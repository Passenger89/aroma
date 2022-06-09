import React from 'react'
import './Header.scss'
import logo from '../../assets/svgs/logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <img src={logo} alt='logo' />
      </div>
    </header>
  )
}

export default Header
