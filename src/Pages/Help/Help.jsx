import React, { useState } from 'react'
import Accordion from '../../components/Accordion/Accordion.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import './Help.scss'

const Help = () => {
  const [active, setActive] = useState(false)
  return <Accordion />
}

export default Help
