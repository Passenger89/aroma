import React from 'react'
import Card from '../../components/Card/Card.jsx'
import { StoreData } from '../../components/StoreData/StoreData.jsx'
import useScrollToTop from '../../Hooks/useScrollToTop.jsx'
import styles from './Store.module.scss'

const Store = () => {
  useScrollToTop()
  return (
    <div className='margin-block container flex column gap'>
      <h1 className='center-text'>The Collection</h1>
      <div className='flex column gap centeredY'>
        {StoreData.map(({ id, image, name, country, description, price }) => {
          return (
            <Card
              key={id}
              image={image}
              name={name}
              country={country}
              description={description}
              price={price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Store
