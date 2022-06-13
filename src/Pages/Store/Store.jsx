import React from 'react'
import Card from '../../components/Card/Card.jsx'
import Grid from '../../components/Grid/Grid.jsx'
import { StoreData } from '../../components/StoreData/StoreData.jsx'
import useScrollToTop from '../../Hooks/useScrollToTop.jsx'
import './Store.scss'

const Store = () => {
  useScrollToTop()
  return (
    <div className='page_container container'>
      <h1>The Collection</h1>
      <Grid title='The Collection'>
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
      </Grid>
    </div>
  )
}

export default Store
