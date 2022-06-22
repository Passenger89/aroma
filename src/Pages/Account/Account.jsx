import React, { useState, useEffect } from 'react'
import MainButton from '../../components/MainButton/MainButton.jsx'
import { faker } from '@faker-js/faker'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import styles from './Account.module.scss'

const Account = () => {
  const [name, setName] = useState(faker.name.findName())
  const [address, setAddress] = useState(faker.address.streetAddress())
  const [email, setEmail] = useState(faker.internet.email())
  const [number, setNumber] = useState(
    faker.phone.phoneNumber('+4477 #### ###')
  )
  const [password, setPassword] = useState('********')

  const [showSuccess, setShowSuccess] = useState(false)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    let name = window.localStorage.getItem('name')
    let address = window.localStorage.getItem('address')
    let email = window.localStorage.getItem('email')
    let number = window.localStorage.getItem('number')
    let password = window.localStorage.getItem('password')

    setName(name)
    setAddress(address)
    setEmail(email)
    setNumber(number)
    setPassword(password)
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    window.localStorage.setItem('name', name)
    window.localStorage.setItem('address', address)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('number', number)
    window.localStorage.setItem('password', password)

    setShowSuccess(true)
    setDisabled(true)

    const successTimeout = setTimeout(() => {
      setShowSuccess(false)
      setDisabled(false)
    }, 5000)
    return () => {
      clearTimeout(successTimeout)
    }
  }

  return (
    <div className='container flex column margin-block'>
      <form
        className='container flex gap column margin-block'
        onSubmit={handleSubmit}
      >
        <div className={styles.form__field}>
          <label htmlFor='name' className='icon'>
            Name
          </label>
          <div className={`${styles.wrapper} flex gap centeredY`}>
            <FaIcons.FaUser />
            <input
              id='name'
              className={`${styles.input} fs-400`}
              type='text'
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder='Full Name'
              autoComplete='off'
            />
          </div>
        </div>
        <div className={styles.form__field}>
          <label htmlFor='address' className='icon'>
            Address
          </label>

          <div className={`${styles.wrapper} flex gap centeredY`}>
            <IoIcons.IoIosPin />
            <input
              id='address'
              className={`${styles.input} fs-400`}
              type='text'
              onChange={e => setAddress(e.target.value)}
              value={address}
            />
          </div>
        </div>
        <div className={styles.form__field}>
          <label htmlFor='email' className='icon'>
            Email
          </label>

          <div className={`${styles.wrapper} flex gap centeredY`}>
            <AiIcons.AiTwotoneMail />
            <input
              id='email'
              className={`${styles.input} fs-400`}
              type='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className={styles.form__field}>
          <label htmlFor='number' className='icon'>
            Phone
          </label>

          <div className={`${styles.wrapper} flex gap centeredY`}>
            <FaIcons.FaPhoneAlt />
            <input
              id='number'
              className={`${styles.input} fs-400`}
              type='tel'
              onChange={e => setNumber(e.target.value)}
              value={number}
            />
          </div>
        </div>
        <div className={styles.form__field}>
          <label htmlFor='password' className='icon'>
            Change Password
          </label>

          <div className={`${styles.wrapper} flex gap centeredY`}>
            <AiIcons.AiFillLock />
            <input
              id='password'
              className={`${styles.input} fs-400`}
              type='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <div className={styles.form__field}>
          <label htmlFor='password' className='icon'>
            Confirm Password
          </label>

          <div className={`${styles.wrapper} flex gap centeredY`}>
            <AiIcons.AiFillLock />
            <input
              id='password'
              className={`${styles.input} fs-400`}
              type='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <p
          className={`${styles.text__success} ${
            !showSuccess ? styles.hide : ''
          }`}
        >
          Changes Saved!
        </p>
        <MainButton label='SAVE CHANGES' type='submit' disabled={disabled} />
      </form>
    </div>
  )
}

export default Account
