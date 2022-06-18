import React from 'react'
import MainButton from '../../components/MainButton/MainButton.jsx'
import { AccountData } from '../../components/AccountData/AccountData.jsx'
import './Account.scss'

const Account = () => {
  return (
    <div className='flex column' onSubmit={e => e.preventDefault()}>
      <form className='container flex gap column margin-block'>
        <ul className='flex column gap'>
          {AccountData.map((item, index) => {
            return (
              <li
                key={index}
                className={`${item.className} item flex gap padded centeredY clr-medium-roast`}
              >
                <label htmlFor={item.id} className='icon'>
                  {item.icon}
                </label>
                <input
                  id={item.id}
                  className='input fs-400'
                  type='text'
                  placeholder={item.content}
                />
              </li>
            )
          })}
        </ul>
        <MainButton label='SAVE CHANGES' type='submit' />
      </form>
    </div>
  )
}

export default Account
