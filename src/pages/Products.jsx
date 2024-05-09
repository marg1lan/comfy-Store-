import React from 'react'
import ProductsContainer from '../components/ProductsContainer'
import { customFetch } from '../utils'
import Filters from '../components/Filters'

const url = '/products'

  export const loader = async ({request}) => {
    const response = await customFetch(url)
    const products = response.data.data
    const meta = response.data.meta
 
    return {products , meta}
  }
function Products() {
  return (
    <div className='align-content mt-14 rounded'>
      <Filters></Filters>
      <ProductsContainer></ProductsContainer>
  </div>  )
}

export default Products