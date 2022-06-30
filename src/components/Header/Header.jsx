import React from 'react'
import { Link } from 'react-router-dom'
import { usePathName } from '../../Hooks/usePathName.jsx'
import styles from './Header.module.scss'
import logo from '../../assets/svgs/logo.svg'
import shoppingBag from '../../assets/svgs/shopping-bag.svg'

const Header = () => {
  const pathname = usePathName()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>

        <img className={styles.shoppingbag} src={shoppingBag} alt='' />
      </div>
    </header>
  )
}

export default Header
