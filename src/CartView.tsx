import { useContext } from "react";
import { CartContext } from "./Context/Context";
import { ClothingItem } from "./Context/Context";
const CartView=()=>{

    const { cartItem }: any = useContext(CartContext);

    if (!cartItem) {
        return <div>Loading...</div>;
      }

      let TotalAmount = cartItem.reduce((acc : number , curr : ClothingItem)=>{
        return acc + curr.price
      },0)
  return(
    <>
    <div className="flex flex-row ">

<ol className="flex flex-row " >
    <li>
    {cartItem.map((item : any)=>{
        return <div className="flex flex-col min-h-[300px] max-h-[300px] min-w-[300px] max-w-[300px] mt-4  justify-center items-center" key={item.id}>
            
        <img className="min-h-[200px] max-h-[200px] min-w-[200px] max-w-[200px] " src={item.image} alt="" />
        <div className="flex flex-col">
        <h2>{item.title}</h2>
        <h2> ₹{item.price}/-</h2>
        
        </div>
        
        </div>
        })}
    </li>
</ol>
    </div>
    <h1>Total Amount :- ₹ {TotalAmount}/-</h1>
        </>
  )
}
export default CartView