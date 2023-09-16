import { useEffect } from "react";
import Loader from "./Loader";
import SingleProduct from "./SingleProduct";
import { productsApi } from "./config";
import { useState } from "react";
const Product=()=>{
    const [Products, setProducts] = useState([]);
    console.log(Products)

    

    const fetchProducts = async(URL : string)=>{
     const res = await fetch (URL);
     const data = await res.json();
    setProducts(data)
    }
    useEffect(() => {
        fetchProducts(productsApi);
      }, []);

    return(<>
    <div className='flex w-full flex-wrap gap-[70px] justify-center items-center' >
  
    {
        Products?.length === 0 ?(
        <Loader/>
        ) : (
  Products.map((item:any)=>{

    return <div key={item.id} className="flex flex-wrap gap-12">
        
        <SingleProduct
        key={item.id}
        image={item.image}
        category={item.category}
        price={item.price}
        id={item.id}
        />
    </div>
  })

  )}
    </div>
    </>)
}
export default Product

