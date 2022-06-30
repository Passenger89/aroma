import React, { useEffect } from 'react'
import Accordion from '../../components/Accordion/Accordion.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import * as AiIcons from 'react-icons/ai'
import styles from './Help.module.scss'
import { validateName } from '../../components/Regex/Regex.js'

//~ REACT-HOOK-FORM
import { useForm } from 'react-hook-form'

//~ JOI
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

//~ MUI
import { TextField, Stack } from '@mui/material'
import { Container } from '@mui/system'

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

  message: Joi.string().required().label('Message'),
})

const Help = ({ showModal, handleShow, handleHide }) => {
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
    }
  }, [isSubmitSuccessful])

  const onSubmitHandler = values => {
    console.log(values)
  }

  return (
    <div className='margin_block container flex column gap centeredX'>
      <h1 className='center_text'>FAQ</h1>
      <Accordion />

      <h2 className='margin_inline_auto center_text'>Need to get in touch?</h2>
      <button onClick={handleShow}>Contact</button>
      {showModal && (
        <Modal>
          <div className={styles.modal__wrapper}>
            <div
              className={`${styles.modal} flex column centeredY space_aroundX br_3`}
            >
              <h1>Contact Us</h1>
              <Container>
                <form
                  onSubmit={handleSubmit(data => {
                    console.log(data)
                  })}
                  autoComplete='off'
                >
                  <Stack
                    direction='column'
                    justifyContent='space_evenly'
                    spacing={2}
                    mt={2}
                  >
                    <TextField
                      label='Full Name'
                      type='text'
                      error={!!errors['fullName']}
                      helperText={
                        errors['fullName'] ? errors['fullName'].message : ''
                      }
                      {...register('fullName')}
                      InputProps={{
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
                      helperText={
                        errors['email'] ? errors['email'].message : ''
                      }
                      {...register('email')}
                      InputProps={{
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
                      label='Message'
                      type='text'
                      multiline
                      rows={6}
                      error={!!errors['message']}
                      helperText={
                        errors['message'] ? errors['message'].message : ''
                      }
                      {...register('message')}
                      InputProps={{
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
                  </Stack>
                </form>
              </Container>
              <button className={styles.modal__btnHide} onClick={handleHide}>
                <AiIcons.AiFillCloseCircle className={styles.btnHide__icon} />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Help
