import {useState} from "react";
import Shop from "./Shop.jsx";
import Nav from "./Nav.jsx";
import Cart from "./Cart.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  const [numItems, setNumItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Nav numItems={numItems} />
      <Outlet context={{cartItems, setCartItems, numItems, setNumItems}} />
    </>
    
  )

}