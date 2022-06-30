import React from 'react'
import { Link } from 'react-router-dom'
import { usePathName } from '../../Hooks/usePathName.jsx'
import styles from './Header.module.scss'
import logo2 from '../../assets/svgs/logo2.svg'
import shoppingBag from '../../assets/svgs/shopping-bag.svg'

const Header = () => {
  const pathname = usePathName()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/'>
          <img src={logo2} alt='logo' />
        </Link>

        <img className={styles.shoppingbag} src={shoppingBag} alt='' />
      </div>
    </header>
  )
}

export default Header
