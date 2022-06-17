import React from 'react'
import { SettingsData } from '../../components/SettingsData/SettingsData.jsx'
import { Link } from 'react-router-dom'
import './Settings.scss'

const Settings = () => {
  return (
    <nav className='container margin-block'>
      <ul className='flex column gap'>
        {SettingsData.map((item, index) => {
          return (
            <li key={index} className={item.className}>
              <Link to={item.path}>
                <button className='flex flex-startX clr-white padded'>
                  <div className='content-wrapper flex gap centeredY fs-300 fw-600'>
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
