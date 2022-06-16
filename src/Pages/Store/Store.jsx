import React from 'react'
import Card from '../../components/Card/Card.jsx'
import { StoreData } from '../../components/StoreData/StoreData.jsx'
import useScrollToTop from '../../Hooks/useScrollToTop.jsx'
import './Store.scss'

const Store = () => {
  useScrollToTop()
  return (
    <div className='margin-block container'>
      <h1>The Collection</h1>
      <div className='flex column gap centeredY'>
        {StoreData.map(({ image, name, country, description, price }) => {
          return (
            <Card
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
