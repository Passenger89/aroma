import React, { useState } from 'react'
import ImageList from '../../components/ImageList/ImageList.jsx'
import { useFetchImages } from '../../Hooks/useFetchImages.jsx'
import './Gallery.scss'

const Gallery = () => {
  const [images, setImages] = useState([])
  useFetchImages('cafe', images, setImages)

  return (
    <div className='page_container' style={{ marginTop: '1rem' }}>
      <ImageList images={images} />
    </div>
  )
}

export default Gallery
