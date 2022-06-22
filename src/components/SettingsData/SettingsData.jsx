import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import styles from '../../Pages/Settings/Settings.module.scss'

export const SettingsData = [
  {
    title: 'Account',
    path: '/account',
    icon: <FaIcons.FaUserEdit />,
    className: `${styles.settingsItem}`,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <AiIcons.AiFillBell />,
    className: `${styles.settingsItem}`,
  },
  {
    title: 'Help',
    path: '/help',
    icon: <FaIcons.FaQuestionCircle />,
    className: `${styles.settingsItem}`,
  },
]
