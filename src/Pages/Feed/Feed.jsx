import React from 'react'
import FeedCard from '../../components/FeedCard/FeedCard.jsx'
import { data } from '../../components/FeedCard/FeedCardData.jsx'

const Feed = () => {
  const feedCard = data.map(({ id, avatar, name, date, text, image }) => (
    <FeedCard
      key={id}
      avatarImage={avatar}
      name={name}
      date={date}
      text={text}
      image={image}
    />
  ))
  return (
    <div className='margin-block container'>
      <div className='flex column gap centeredY'>{feedCard}</div>
    </div>
  )
}

export default Feed
