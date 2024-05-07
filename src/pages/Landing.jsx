import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'

const url = '/products?featured=true'

export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data
  return {products}
}

function Landing() {
  return (
    <div className='align-content mt-9'>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
    </div>
  )
}

export default Landing