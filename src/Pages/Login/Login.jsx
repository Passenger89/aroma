import React from 'react'
import MainButton from '../../components/MainButton/MainButton.jsx'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import styles from './Login.module.scss'
import GoogleButton from '../../components/GoogleButton/GoogleButton.jsx'

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='container flex column margin_block clr_medium_roast'>
      <form
        className='container flex gap column margin_block'
        onSubmit={handleSubmit}
      >
        <div className={styles.form__field}>
          <label htmlFor='name' className='icon'>
            username
          </label>
          <div className={`${styles.wrapper} flex gap centeredY`}>
            <FaIcons.FaUser />
            <input
              id='name'
              className={`${styles.input} fs_400`}
              type='text'
              placeholder='Full Name'
              autoComplete='off'
            />
          </div>
        </div>

        <div className={styles.form__field}>
          <label htmlFor='password' className='icon'>
            Password
          </label>
          <div className={`${styles.wrapper} flex gap centeredY`}>
            <AiIcons.AiFillLock />
            <input
              id='password'
              className={`${styles.input} fs-400`}
              type='password'
              placeholder='Password'
              autoComplete='off'
            />
          </div>
        </div>

        <a className='center-text' href='#'>
          Create an account
        </a>

        <MainButton label='CONTINUE' type='submit' />
        <GoogleButton label='LOGIN WITH GOOGLE' />
      </form>
    </div>
  )
}

export default Login
