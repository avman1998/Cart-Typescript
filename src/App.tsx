import { Outlet } from "react-router-dom";
import './App.css'
import CartContextProvider from "./Context/Context";
import Header from './Header'

function App() {
  return (
    <>
      <CartContextProvider>
        <div className="flex flex-col items-center">
          <Header />
          <Outlet />
        </div>
      </CartContextProvider>
    </>
  )
}

export default App;

