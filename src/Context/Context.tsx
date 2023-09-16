import React, { createContext, useState } from "react";
import { ReactNode } from "react";

export const CartContext = createContext<CartContextProps | null>(null);

export interface ClothingItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export interface CartContextProps {
  cartItem: ClothingItem[];
  setCartItems: React.Dispatch<React.SetStateAction<ClothingItem[]>> ;
}
interface CartContextProviderProps{
  children : ReactNode
}
const CartContextProvider= ({ children } : CartContextProviderProps ) => {
  const [cartItem, setCartItems] = useState<ClothingItem[]>([]);
  
  const contextValue: CartContextProps = {
    cartItem,
    setCartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;


  