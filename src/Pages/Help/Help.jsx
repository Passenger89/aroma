import React from 'react'
import Accordion from '../../components/Accordion/Accordion.jsx'
import MainButton from '../../components/MainButton/MainButton.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import * as AiIcons from 'react-icons/ai'
import styles from './Help.module.scss'

const Help = ({ showModal, handleShow, handleHide }) => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='margin-block container flex column gap centeredX'>
      <h1 className='center-text'>FAQ</h1>
      <Accordion />

      <h2 className='margin-inline-auto center-text'>Need to get in touch?</h2>
      <button onClick={handleShow}>Contact</button>
      {showModal && (
        <Modal>
          <div className={styles.modal__wrapper}>
            <div
              className={`${styles.modal} flex column centeredY space-aroundX br-3`}
            >
              <h1>Contact Us</h1>
              <form
                className='container flex column centeredY centeredX gap'
                onSubmit={handleSubmit}
              >
                <div className={styles.form__field}>
                  <label className={styles.label} htmlFor='name'>
                    Name
                  </label>
                  <input id='name' className={styles.input} type='text' />
                </div>
                <div className={styles.form__field}>
                  <label className={styles.label} htmlFor='email'>
                    Email
                  </label>
                  <input id='email' className={styles.input} type='email' />
                </div>
                <div className={styles.form__field}>
                  <label className={styles.label} htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    className={styles.textArea}
                    id='message'
                  ></textarea>
                </div>

                <MainButton label='SUBMIT' type='submit' />
              </form>
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
