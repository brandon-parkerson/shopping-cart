import {useEffect, useState} from "react";

import Nav from "./Nav.jsx";

import { Outlet, useLocation } from "react-router-dom";



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