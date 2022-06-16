import React from 'react'
import { Link } from 'react-router-dom'
import { usePathName } from '../../Hooks/usePathName.jsx'
import './Header.scss'
import logo from '../../assets/svgs/logo.svg'
import shoppingBag from '../../assets/svgs/shopping-bag.svg'

const Header = () => {
  const pathname = usePathName()

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        {pathname === 'Store' && (
          <img className='shoppingbag' src={shoppingBag} alt='' />
        )}
      </div>
    </header>
  )
}

export default Header
