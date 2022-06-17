import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'

export const SettingsData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillEdit />,
    className: 'settings-item',
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <AiIcons.AiFillBell />,
    className: 'settings-item',
  },
  {
    title: 'Account',
    path: '/account',
    icon: <FaIcons.FaUserEdit />,
    className: 'settings-item',
  },
  {
    title: 'Help',
    path: '/help',
    icon: <FaIcons.FaQuestionCircle />,
    className: 'settings-item',
  },
]
