import { data, Link, Outlet, useOutletContext } from "react-router-dom";

import './Shop.css';
import { useState } from "react";
import { useEffect } from "react";




 

const Shop = () => {
  
  const {cartItems, setCartItems, numItems, setNumItems} = useOutletContext();
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data));
      
  }, [])

  

 

  
   
   
   

  function addItem(item) {
      setNumItems(numItems + 1);
      
      setCartItems([...cartItems, item])
   }

  function deleteItem(itemId) {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    setNumItems(numItems - 1);
   }

  function Cards() {
    return (
      <div className="cards-container">
        {items.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} className="item-img" />
            <div>{item.title}</div>
            <p>${item.price}</p>
            <div>
              <button onClick={() => addItem(item)} className="add-btn">Add Item</button> 
              <button onClick={() => deleteItem(item.id)} className="delete-btn">Delete Item</button>
            </div>
            
          </div>
          
        ))}
      </div>
    )
  }
   



    return (
        <>
            
            
            <Cards />
            
        </>
        
        
    )
}

export default Shop;