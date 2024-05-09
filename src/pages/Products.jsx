import React from 'react'
import ProductsContainer from '../components/ProductsContainer'
import { customFetch } from '../utils'

const url = '/products'

  export const loader = async ({request}) => {
    const response = await customFetch(url)
    const products = response.data.data
    const meta = response.data.meta

    return {products , meta}
  }
function Products() {
  return (
    <div className='align-content'>
      <ProductsContainer></ProductsContainer>
  </div>  )
}

export default Products