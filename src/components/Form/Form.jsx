import React, { useEffect, useState } from 'react'
import {
  validateName,
  validatePassword,
  validatePhone,
} from '../Regex/Regex.js'
import styles from './Form.module.scss'

//~ REACT-HOOK-FORM
import { useForm } from 'react-hook-form'

//~ JOI
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

//~ MUI - FORM
import { TextField, Stack, InputAdornment } from '@mui/material'
import { Container } from '@mui/system'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LockIcon from '@mui/icons-material/Lock'
import Alert from '@mui/material/Alert'

const schema = Joi.object({
  fullName: Joi.string()
    .required()
    .pattern(validateName)
    .message('Only characters a-z with one space allowed.')
    .label('Full Name'),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .message('Please enter a valid email') //! tlds must be set to false while list of TLDs doesn't exist
    .label('Email'),

  phone: Joi.string()
    .pattern(validatePhone)
    .message('Please enter a valid phone number')
    .label('Phone'),

  password: Joi.string()
    .pattern(validatePassword)
    .message(
      'Min 8 characters, at least one upper case letter, one lower case letter, one number and one special character'
    )

    .label('Password'),
  confirm_password: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': 'Password must match',
  }), //https://stackoverflow.com/questions/65965707/how-to-set-joi-validations-with-custom-messages
})

const Form = () => {
  const [success, setSuccess] = useState(false)

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({
    resolver: joiResolver(schema),
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
      setSuccess(true)
      const timeout = setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }
  }, [isSubmitSuccessful])

  const onSubmitHandler = values => {
    console.log(values)
  }

  return (
    <Container maxWidth='sm'>
      <form
        onSubmit={handleSubmit(data => {
          console.log(data)
        })}
        autoComplete='off'
      >
        <Stack
          direction='column'
          justifyContent='space-evenly'
          spacing={2}
          mt={2}
        >
          <TextField
            label='Full Name'
            type='text'
            error={!!errors['fullName']}
            helperText={errors['fullName'] ? errors['fullName'].message : ''}
            {...register('fullName')}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PersonIcon className={styles.icon} />
                </InputAdornment>
              ),
              //! MUI STYLE OVERRIDE
              sx: {
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#80401e',
                },
              },
              //!--------------------
            }}
          />

          <TextField
            label='Email'
            type='email'
            error={!!errors['email']}
            helperText={errors['email'] ? errors['email'].message : ''}
            {...register('email')}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <EmailIcon className={styles.icon} />
                </InputAdornment>
              ),
              //! MUI STYLE OVERRIDE
              sx: {
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#80401e',
                },
              },
              //!--------------------
            }}
          />

          <TextField
            label='Phone'
            type='tel'
            error={!!errors['phone']}
            helperText={errors['phone'] ? errors['phone'].message : ''}
            {...register('phone')}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PhoneIcon className={styles.icon} />
                </InputAdornment>
              ),
              //! MUI STYLE OVERRIDE
              sx: {
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#80401e',
                },
              },
              //!--------------------
            }}
          />

          <TextField
            label='Password'
            type='password'
            error={!!errors['password']}
            helperText={errors['password'] ? errors['password'].message : ''}
            {...register('password')}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon className={styles.icon} />
                </InputAdornment>
              ),
              //! MUI STYLE OVERRIDE
              sx: {
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#80401e',
                },
              },
              //!--------------------
            }}
          />

          <TextField
            label='Confirm Password'
            type='password'
            error={!!errors.confirm_password}
            helperText={
              errors.confirm_password ? errors.confirm_password.message : ''
            }
            {...register('confirm_password')}
            InputProps={{
              startAdornment: (
                <InputAdornment className={styles.iconWrapper} position='start'>
                  <LockIcon className={styles.icon} />
                </InputAdornment>
              ),
              //! MUI STYLE OVERRIDE
              sx: {
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#80401e',
                },
              },
              //!--------------------
            }}
          />
          <input className={styles.btn_submit} type='submit' />
          {success && <Alert severity='success'>Changes Saved!</Alert>}
        </Stack>
      </form>
    </Container>
  )
}

export default Form
