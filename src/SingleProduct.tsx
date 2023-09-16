import { Link } from "react-router-dom";

interface ItemProps{
    image:string
    category:string 
    id:number 
    price: number
}
const SingleProduct=({image, category , id , price} : ItemProps)=>{

    return(<>
    
    <div className="flex flex-col gap-2 ">

    <img className="min-w-[250px] max-w-[250px] min-h-[220px] max-h-[220px]" src={image} alt="Image" />
    <h2>{category}</h2>
    <h2>₹{price} /-</h2>
    <Link to={`/viewproduct/${id}`}><button className="bg-[#2b82ad] p-2 text-[#00405c]"> 
        View Product
    </button>
    </Link>
    </div>
    
    </>)
}
export default SingleProduct