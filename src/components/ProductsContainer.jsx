import ProductsGrid from '../components/ProductsGrid'
import ProductList from '../components/ProductList'
import { useState } from 'react'
import { BsFillGearFill , BsList } from 'react-icons/bs'
import { useLoaderData } from 'react-router-dom'

function ProductsContainer() {
  const {meta} = useLoaderData()
  const totalProducts = meta.pagination.total
  const[layout , setLayout] = useState('grid')

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle brn-sm ${pattern === layout ? 'btn-primary text-primary-content' : 'btn-ghost   text-base-content'}`
  }
  return (
   <>
      <div className='flex justify-between items-center mt-8 border-b border-base-200 pb-5'>
        <h4 className='font-medium text-md'>
          {totalProducts} products {totalProducts > 1 && ''}
        </h4>
        <div className="flex gap-x2">
          <button onClick={() => setLayout('grid')} className={setActiveStyles('grid')}>
            <BsFillGearFill></BsFillGearFill>
          </button>
          <button  onClick={() => setLayout('list')} className={setActiveStyles ('list')}>
            <BsList></BsList>
          </button>
        </div>
      </div>
     <div>
     {totalProducts === 0 ? <h5>Sorry , no products metched your search</h5> :
      layout == 'grid' ? <ProductsGrid></ProductsGrid> : <ProductList></ProductList>}
     </div>
   </>
  )
}

export default ProductsContainer