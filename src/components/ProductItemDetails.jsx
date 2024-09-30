import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function ProductItemDetails() {
    const [product, setProduct] = useState({})
    const[loading,setLoading] = useState(true)
    const{category, image, description, title, price, rating} = product
    const {id} =  useParams()
    // console.log(id)
  //  fetch a product
  async function fetchProduct(){
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setLoading(false)
    setProduct(res.data)

    console.log(res.data)
  }

  useEffect(()=>{
      fetchProduct()
  },[id])

  const loadingJsx = <div className='h-screen flex items-center justify-center'>
    <h1 className="text-center text-4xl">Loading...</h1>
  </div>

  return loading ? (
    loadingJsx
  ) : (
    <div className="my-32  h-full p-12  bg-slate-100">
      <h1 className="w-full mb-4 bg-orange-200 text-2xl p-8 font-bold font-mono tracking-widest">
        {title}
      </h1>
      {/* image and description */}
      <div className="flex flex-col md:flex md:flex-row gap-4">
        <img
          className=" min-h-[300px] max-w-[300px] rounded-full"
          src={image}
          alt="image"
        />
        <div className="bg-slate-300 p-4 flex flex-col gap-6">
          <p className=" leading-relaxed font-mono tracking-wide">
              {">>   "} {description}
          </p>
          <span className="font-light text-xl">
            {' '}
            price : <span> {price}</span>{' '}
          </span>
          <span>
            rating : <span className="font-sans"> {rating?.rate}</span>{' '}
          </span>
          <span className="size-16 bg-slate-900 rounded-full p-2"></span>
          <span>
            {' '}
            Count: <span>{rating.count}</span>{' '}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItemDetails
