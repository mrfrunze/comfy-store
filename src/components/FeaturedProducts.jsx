import React from 'react'
import {SectionTitle, ProductsGrid} from './index'

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text="Feature products" />
      <ProductsGrid/>
    </div>
  )
}

export default FeaturedProducts