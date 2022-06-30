import React from 'react'
import AddButton from '../AddButton/AddButton.jsx'
import styles from './Card.module.scss'

const Card = ({ image, name, country, description, price, featured }) => {
  return (
    <div className={`${styles.card} flex column br_2 box_shadow`}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${image}')` }}
      >
        {featured && <h4 className='uppercase fw_800 clr_white'>featured</h4>}
      </div>
      <div className={`${styles.content} gap`}>
        <h2 className='clr_medium_roast fs_500'>{name}</h2>
        <h3>{country}</h3>
        <p className='clr_medium_roast fs_400'>{description}</p>
        <div className='flex space_betweenX'>
          <span className='fs_500 fw_700 clr_gold_blend'>{price}</span>
          <AddButton />
        </div>
      </div>
    </div>
  )
}

export default Card
