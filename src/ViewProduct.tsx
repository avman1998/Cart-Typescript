import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { product } from "./config";
import { useContext } from "react";
import { CartContextProps } from "./Context/Context";
import { CartContext } from "./Context/Context";
import { ClothingItem } from "./Context/Context";


const ViewProduct=()=>{
    const { id } = useParams();
   const cartContext  = useContext <CartContextProps | null>(CartContext)
    const[Productdata , setProductdata]=useState<ClothingItem >()
    

    // Fetch Api
    const fetchProductdata = async(URL : string)=>{
      const res = await fetch(URL);
      const data = await res.json();
      setProductdata(data)
    }

    // Call API
    useEffect(() => {
        const apiURL = product(Number(id) );
        fetchProductdata(apiURL)
      }, [])

 if(!cartContext || !Productdata){
  return <div>
    <h1>Loading....</h1>
  </div>
  
 }
 const {cartItem , setCartItems} = cartContext ;
    //   Function fetch
    

      
      // Add to Cart
      const addToCart = (Data : ClothingItem) => {
        setCartItems([...cartItem, Data]);
        console.log("Working" )
      };
      
    
    

     return(
        <>
       <div className="flex mt-2 gap-2 justify-center flex-col items-center">
       {Productdata?.image && <img className="rounded min-h-[400px] max-h-[400px] min-w-[400px] max-w-[400px]" src={Productdata?.image} alt="" />}
       {Productdata?.title && <h2 className="text-2xl" >{Productdata?.title}</h2>}

       <h2 className="text-2xl" >₹{Productdata?.price} /-</h2>
       <button className="bg-[#2b82ad] text-white">Buy Now</button>

       <button
  className="bg-[#2b82ad] text-white"
  onClick={() => {
    addToCart(Productdata);

  }}
>
  Add to Cart
</button>
       </div>
        </>
    )
    }
export default ViewProduct