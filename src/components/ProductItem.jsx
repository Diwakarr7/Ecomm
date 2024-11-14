import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem({ product, deleteProduct }) {
  const {
    id,
    price,
    category,
    image,
    rating: { rate },
    title,
  } = product;

  return (
    <div className='py-2'>
      <Link to={`/products/${id}`}>
        <li className="cursor-pointer hover:text-white hover:bg-slate-400 rounded-lg space-y-6 py-4 px-2 bg-slate-200 font-bold">
          <img
            className="rounded-xl size-64 w-full  min-h-[350px] lg:min-h-[450px]"
            src={image}
            alt=""
          />
          <h2 className="font-extrabold tracking-wider">
            Name: <span className="font-light">{title}</span>
          </h2>
          <h3>
            category : <span className="font-light"> {category}</span>{' '}
          </h3>
          <h2>
            Price: <span className="font-light"> {price} </span>
          </h2>
          <p>
            rating :<span className="font-light"> {rate}</span>
          </p>
        </li>
      </Link>
      <div className="flex justify-end">
        <button
          className="bg-red-300 rounded-md px-12 "
          onClick={()=>deleteProduct(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem
