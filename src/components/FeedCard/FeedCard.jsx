import React, { useState } from 'react'
import styles from './FeedCard.module.scss'
import avatar from '../../assets/svgs/avatar.svg'
import heartIcon from '../../assets/svgs/heartIcon.svg'
import commentIcon from '../../assets/svgs/commentIcon.svg'
import cafeSelfie from '../../assets/svgs/café selfie.svg'

const FeedCard = ({ id, avatarImage, name, date, text, image }) => {
  const [likes, setLikes] = useState(0)
  const [disable, setDisable] = React.useState(false)
  return (
    <div className={`${styles.feedCard}  flex column gap br_2 box_shadow`}>
      <div className={`${styles.header} flex space_betweenX centeredY`}>
        <div className='image_name flex centeredY gap'>
          <img
            className={`${styles.feedCard_avatar} br_3`}
            src={avatarImage}
            alt=''
          />
          <h3 className='clr_medium_roast'>{name}</h3>
        </div>
        <span>
          {date > 60
            ? `${Math.round(date / 60)} hrs ago`
            : `${date} minutes ago`}
        </span>
      </div>
      <div className={`${styles.text} fs_400 fw_500 clr_medium_roast`}>
        {text}
      </div>

      <img
        className={`${styles.feedCard_image}`}
        src={image || cafeSelfie}
        alt=''
      />

      <div className={`${styles.footer} flex gap`}>
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
