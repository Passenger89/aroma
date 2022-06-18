import React from 'react'
import { faker } from '@faker-js/faker'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'

export const AccountData = [
  {
    id: 'name',
    icon: <FaIcons.FaUser />,
    content: faker.name.findName(),
    get className() {
      return this.id
    },
  },
  {
    id: 'address',
    icon: <IoIcons.IoIosPin />,
    content: faker.address.streetAddress(),
    get className() {
      return this.id
    },
  },
  {
    id: 'email',
    icon: <AiIcons.AiTwotoneMail />,
    content: faker.internet.email(),
    get className() {
      return this.id
    },
  },
  {
    id: 'number',
    icon: <FaIcons.FaPhoneAlt />,
    content: faker.phone.phoneNumber('+4477 #### ###'),
    get className() {
      return this.id
    },
  },
  {
    id: 'password',
    icon: <AiIcons.AiFillLock />,
    content: '*'.repeat(Math.floor(Math.random() * (12 - 8) + 8)),
    get className() {
      return this.id
    },
  },
]
