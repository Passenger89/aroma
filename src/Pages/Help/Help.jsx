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
    <div className='container flex column centeredX'>
      <h1>FAQ</h1>
      <Accordion />

      <h2 className='margin-inline-auto center-text'>Need to get in touch?</h2>
      <button onClick={handleShow}>Contact</button>
      {showModal && (
        <Modal>
          <div className={styles.modal__wrapper}>
            <div className={`${styles.modal} flex centeredY br-3`}>
              <form
                className='container flex column centeredY centeredX gap'
                onSubmit={handleSubmit}
              >
                <div className={styles.form__field}>
                  <label htmlFor='name'></label>
                  <input id='name' className={styles.input} type='text' />
                </div>
                <div className={styles.form__field}>
                  <label htmlFor='email'></label>
                  <input id='email' className={styles.input} type='email' />
                </div>
                <div className={styles.form__field}>
                  <label htmlFor='message'></label>
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
