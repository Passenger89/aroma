import React, { useState } from 'react'
import { FaqData } from './FaqData.jsx'
import * as BiIcons from 'react-icons/bi'
import './Accordion.scss'

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
      <div className='accordion'>
        {FaqData.map((item, i) => {
          return (
            <div className='item' key={i}>
              <div
                className='title flex space-betweenX centeredY padded fs-400 fw-500'
                onClick={() => toggle(i)}
              >
                <h2>{item.question}</h2>
                <span>
                  {selected === i ? (
                    <BiIcons.BiChevronUp />
                  ) : (
                    <BiIcons.BiChevronDown />
                  )}
                </span>
              </div>
              <div
                className={`content padded fs-500 fw-400 ${
                  selected === i ? 'content show' : 'content'
                }`}
              >
                {item.answer}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Accordion
