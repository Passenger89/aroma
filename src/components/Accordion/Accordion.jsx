import React, { useState } from 'react'
import { FaqData } from './FaqData.jsx'
import * as BiIcons from 'react-icons/bi'
import styles from './Accordion.module.scss'

const Accordion = () => {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className='wrapper container margin-block'>
      <ul
        className={styles.accordion}
        aria-label='Accordion Control Group Buttons'
      >
        {FaqData.map((item, i) => {
          return (
            <li className={styles.item} key={i}>
              <button
                className={`${styles.title} flex space-betweenX centeredY padded fs-400 fw-500`}
                onClick={() => toggle(i)}
                aria-expanded={`${selected === i ? 'true' : 'false'}`}
                aria-controls={`accordion-panel-${i}`}
                id={`accordion-header-${i}`}
              >
                <h2>{item.question}</h2>
                <span>
                  {selected === i ? (
                    <BiIcons.BiChevronUp />
                  ) : (
                    <BiIcons.BiChevronDown />
                  )}
                </span>
              </button>
              <div
                className={`${styles.content} padded fs-500 fw-400 ${
                  selected === i ? '' : 'sr-only'
                }`}
                id={`accordion-panel-${i}`}
                aria-labelledby={`accordion-header-${i}`}
              >
                {item.answer}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Accordion
