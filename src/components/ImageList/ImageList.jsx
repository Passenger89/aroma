import './ImageList.scss'
import React from 'react'
import ImageCard from '../ImageCard/ImageCard.jsx'

const ImageList = ({ images }) => {
  const imageList = images.map(image => {
    return <ImageCard key={image.id} image={image} />
  })
  return <div className='image-list'>{imageList}</div>
}

export default ImageList
