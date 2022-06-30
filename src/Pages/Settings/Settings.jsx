import React from 'react'
import { SettingsData } from '../../components/SettingsData/SettingsData.jsx'
import { Link } from 'react-router-dom'
import styles from './Settings.module.scss'

const Settings = () => {
  return (
    <nav className=' flex centeredX margin_block'>
      <ul className={`${styles.ul} flex column gap`}>
        {SettingsData.map((item, index) => {
          return (
            <li key={index} className={item.className}>
              <Link to={item.path}>
                <button className='flex flex_startX clr_white padded'>
                  <div
                    className={`${styles.content__wrapper} flex gap centeredY fs_300 fw_600`}
                  >
                    {item.icon}
                    {item.title}
                  </div>
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Settings
