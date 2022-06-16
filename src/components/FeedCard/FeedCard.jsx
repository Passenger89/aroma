import React, { useState } from 'react'
import './FeedCard.scss'
import avatar from '../../assets/svgs/avatar.svg'
import heartIcon from '../../assets/svgs/heartIcon.svg'
import commentIcon from '../../assets/svgs/commentIcon.svg'
import cafeSelfie from '../../assets/svgs/café selfie.svg'

const FeedCard = ({ id, avatarImage, name, text, image }) => {
  const [likes, setLikes] = useState(0)
  const [disable, setDisable] = React.useState(false)
  return (
    <div className='feedCard container flex column gap br-2 box-shadow'>
      <div className='header flex space-betweenX centeredY'>
        <div className='image_name flex centeredY gap'>
          <img className='feedCard_avatar br-3' src={avatarImage} alt='' />
          <h3 className='clr-medium-roast'>{name}</h3>
        </div>
        <span>1h ago</span>
      </div>
      <div className='text fs-400 fw-500 clr-medium-roast'>{text}</div>

      <img className='feedCard_image' src={image || cafeSelfie} alt='' />

      <div className='footer flex gap'>
        <div className='flex gap'>
          <button
            disabled={disable}
            onClick={() => {
              setLikes(likes + 1)
              setDisable(true)
            }}
          >
            <img src={heartIcon} alt='' />
          </button>
          <span>{likes}</span>
        </div>
        <div className='flex gap'>
          <img src={commentIcon} alt='' />
          <span>120</span>
        </div>
      </div>
    </div>
  )
}

export default FeedCard
