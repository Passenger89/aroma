import React from 'react'
import { faker } from '@faker-js/faker'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'

export const AccountData = [
  {
    id: 'Name',
    icon: <FaIcons.FaUser />,
    value: faker.name.findName(),
    type: 'text',
    get className() {
      return this.id
    },
  },
  {
    id: 'Address',
    icon: <IoIcons.IoIosPin />,
    value: faker.address.streetAddress(),
    type: 'text',
    get className() {
      return this.id
    },
  },
  {
    id: 'Email',
    icon: <AiIcons.AiTwotoneMail />,
    value: faker.internet.email(),
    type: 'email',
    get className() {
      return this.id
    },
  },
  {
    id: 'Number',
    icon: <FaIcons.FaPhoneAlt />,
    value: faker.phone.phoneNumber('+4477 #### ###'),
    type: 'tel',
    get className() {
      return this.id
    },
  },
  {
    id: 'Password',
    icon: <AiIcons.AiFillLock />,
    value: '*'.repeat(Math.floor(Math.random() * (12 - 8) + 8)),
    type: 'password',
    get className() {
      return this.id
    },
  },
]
