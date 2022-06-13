import React from 'react'
import './Grid.scss'

const Grid = ({ children }) => {
  return (
    <>
      <div className='photo-grid'>{children}</div>
    </>
  )
}

export default Grid
