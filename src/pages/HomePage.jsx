import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductItem from '../components/ProductItem';

function HomePage() {
  const [products, setProducts] = useState([]);
  const[loading, setLoading] =  useState(true);
  const[search, setSearch] = useState("");

  // men clothing
  const [category, setCategory] = useState('select category');

    async function fetchProducts(){
      // get list of products
        const res = await axios('https://fakestoreapi.com/products')
        // console.log(res.data)
        setLoading(false)
        setProducts(res.data)

    }

  // runs only once
   useEffect(()=>{
       fetchProducts()
  },[])



  //  delete product

  const deleteProduct = (itemId)=>{
      console.log(itemId)
    const del = products.filter((item)=> item.id !== itemId);
      setProducts([...del]);
  }

  // search for products
  const searchProduct = ()=>{
        const filterProduct = products.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase()))
        // console.log(filterProduct);
        return filterProduct;
      }


      // men products
      const menProducts = ()=> {
        const menProduct  = products.filter((product)=>product.category.toLowerCase().startsWith("men"))
          // console.log(menProducts);
          return menProduct
        }

        //  women products
        const womenProducts = () => {
          const womenProduct = products.filter((product) =>
            product.category.toLowerCase().startsWith('women')
          );
          // console.log(menProducts);
          return womenProduct;
        };




  return (
    <>
      <div className="p-4 min-h-screen mt-20">
        {/* <h1>home page</h1> */}
        <h1 className="sticky top-2 bg-transparent backdrop-blur-2xl tracking-widest w-full decoration-dashed decoration-0 p-4 rounded-lg text-5xl mt-12 mb-12 underline underline-offset-8 font-serif ">
          All Products
        </h1>
        <div className="my-12 flex flex-col md:justify-between sm:flex-row gap-6">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="lg:w-1/4 w-full p-4 outline-none bg-slate-200 rounded-full sm:w-screen md:w-2/4"
            type="search"
            placeholder="Search Products"
          />
        </div>

        {loading ? (
          <h1 className="uppercase font-semibold text-center text-4xl">
            Loading.....
          </h1>
        ) : searchProduct().length === 0 ? (
          <h1 className="w-screen uppercase font-semibold text-center text-4xl">
            Nothing Found...
          </h1>
        ) : (
          <ul className="w-full gap-4  grid sm:grid-cols-2 md:grid-cols-3">
            {searchProduct().map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
              />
            ))}
          </ul>
        )}
      </div>
      {/*  mens section */}
      <div className="p-4 min-h-screen mt-16">
        <h1 className="sticky top-2 bg-transparent backdrop-blur-2xl tracking-widest w-full decoration-dashed decoration-0 p-4 rounded-lg text-5xl mt-12 mb-12 underline underline-offset-8 font-serif ">
          MEN
        </h1>
        <ul className="w-full gap-4  grid sm:grid-cols-2 md:grid-cols-3">
          {menProducts().map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}
        </ul>
      </div>
      {/*  women section */}
      <div className="p-4 min-h-screen mt-16">
        <h1 className="sticky top-2 bg-transparent backdrop-blur-2xl tracking-widest w-full decoration-dashed decoration-0 p-4 rounded-lg text-5xl mt-12 mb-12 underline underline-offset-8 font-serif ">
          WOMEN
        </h1>
        <ul className="w-full gap-4  grid sm:grid-cols-2 md:grid-cols-3">
          {womenProducts().map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage

