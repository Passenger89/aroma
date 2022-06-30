import React from 'react'
import Grid from '../../components/Grid/Grid.jsx'
import Card from '../../components/Card/Card.jsx'
import { StoreData } from '../../components/StoreData/StoreData.jsx'
import useScrollToTop from '../../Hooks/useScrollToTop.jsx'
import styles from './Store.module.scss'

const Store = () => {
  useScrollToTop()
  return (
    <div className='margin_block container flex column centeredY gap'>
      <h1 className='center_text margin_block'>The Collection</h1>
      <div className='flex flex_wrap gap centeredX'>
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
