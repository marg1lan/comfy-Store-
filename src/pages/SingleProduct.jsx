import { useLoaderData , Link } from "react-router-dom"
import { customFetch, formatPrice, generateAmountOptions } from "../utils"
import { useState } from "react"

export const loader = async ({params}) => {
  const request = await customFetch(`/products/${params.id}`)
  return {product:request.data.data}
}
function SingleProduct() {
  const {product} = useLoaderData()
  const {image , price, description , title , colors , company} = product.attributes
  const dollarAmount = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount ,setAmount] = useState(0)

   
  return (
    <section className="align-content">
    <div className="text-md breadcrumbs">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
    </div>
    <div className="mt-6 grid gap-y-8 lg: grid-cols-2">
      <img className="w-96 h-96 object-cover rounded-lg" src={image} alt={title} />
      <div>
        <h1 className="capitalize font-bold text-3xl">{title}</h1>
        <h4 className="title-xl text-neutral-content font-bold mt-4">{company}</h4>
        <p className="mt-3 text-xl">{dollarAmount}</p>
        <p className="mt-6 leading-8">{description}</p>
        <div className="mt-2">
          {colors.map((color) => {
            return <button className={`badge w-6 h-6 mr-2 ${
              color == productColor && 'border-2 border-secondary'
            }`} style={{backgroundColor:color}} key={color} onClick={() => setProductColor(color)}></button>
          })}
        </div>
        <div className="form-control w-64 mx-w-xs">
          <label className="label">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Amount
            </h4>
          </label>
         <select value={amount} onChange={() => setAmount(e.target.value)} className="select select-secondary select-bordered mt-1 select-md">{
          generateAmountOptions(20)
         }</select>
         <div className="mt-5 mb-5">
          <button className="btn btn-secondary btn-md" onClick={() => {console.log('Add to Bag');}}>
            Add To Bag
          </button>
         </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default SingleProduct