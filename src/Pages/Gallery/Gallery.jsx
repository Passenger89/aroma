import React, { useState } from 'react'
import ImageList from '../../components/ImageList/ImageList.jsx'
import { useFetchImages } from '../../Hooks/useFetchImages.jsx'
import styles from './Gallery.module.scss'

const Gallery = () => {
  const [images, setImages] = useState([])
  useFetchImages('cafe', images, setImages)

  return (
    <div className='margin_block'>
      <ImageList images={images} />
    </div>
  )
}

export default Gallery
