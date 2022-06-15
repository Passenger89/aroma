import React, { useState, useEffect, useRef } from 'react'

const ImageCard = ({ image }) => {
  const [span, setSpan] = useState(0)
  const imageRef = useRef()

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans) //* Waits for images to be downloaded before calling function.
  }, [])

  const setSpans = () => {
    const imgHeight = imageRef.current.clientHeight
    const rowHeight = 10
    const span = Math.ceil(imgHeight / rowHeight)
    setSpan(span)
  }

  const { urls, alt_description } = image
  return (
    <div style={{ gridRowEnd: `span ${span}`, placeSelf: 'center' }}>
      <img src={urls.regular} alt={alt_description} ref={imageRef} />
    </div>
  )
}

export default ImageCard
