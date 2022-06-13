import React from 'react'
import { usePathName } from '../../Hooks/usePathName.jsx'
import './Header.scss'
import logo from '../../assets/svgs/logo.svg'
import shoppingBag from '../../assets/svgs/shopping-bag.svg'

const Header = () => {
  const pathname = usePathName()

  return (
    <header className='header'>
      <div className='container'>
        <img src={logo} alt='logo' />
        {pathname === 'Store' && (
          <img className='shoppingbag' src={shoppingBag} alt='' />
        )}
      </div>
    </header>
  )
}

export default Header
