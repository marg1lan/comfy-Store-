import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

function ProductList() {
    const {products} = useLoaderData()
  return (
    <div className='mt-12 grid gap-y-8'>
        {products.map((product) => {
            const {title , image , price , company} = product.attributes
            const dollarFormat = formatPrice(price)
            return <Link key={product.id} to={`/products/${product.id}`} className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-6xl'>
               <img className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300' src={image} alt={title} />
                <div className='ml-0 sm:ml-16'>
                    <h3 className='capitalize font-medium text-lg mb-2'>{title}</h3>
                    <h4 className='capitalize text-md text-neutral-content mb-7'>{company}</h4>
                    <p className='font-medium ml-0 sm:ml-auto text-lg'>
                        {dollarFormat}
                    </p>
                </div>
            </Link>
        })}

    </div>
  )
}

export default ProductList