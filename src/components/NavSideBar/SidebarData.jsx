import React from 'react'
import * as AiIcons from 'react-icons/ai'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text',
  },
  {
    title: 'Gallery',
    path: '/gallery',
    icon: <AiIcons.AiFillCamera />,
    className: 'nav-text',
  },
  {
    title: 'Feed',
    path: '/feed',
    icon: <AiIcons.AiFillProfile />,
    className: 'nav-text',
  },
  {
    title: 'Store',
    path: '/store',
    icon: <AiIcons.AiFillShopping />,
    className: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiFillSetting />,
    className: 'nav-text',
  },
]
