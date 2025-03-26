import { data, Link, Outlet } from "react-router-dom";
import CartLogo from "./Logo";
import logo from './assets/stock-increase-svgrepo-com.svg';
import './Shop.css';
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./Nav";




 

const Shop = ({onItem}) => {
  

  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data));
      
  }, [])

  function AddButton() {
    return (
      <button onClick={addItem} className="add-btn">Add Item</button>
    )
  }

  function DeleteButton() {
    return(
      <button onClick={deleteItem} className="delete-btn">Delete Item</button>
    )
  }

  let numItems = 0;
   
   // shop items
   const [items, setItems] = useState([]);
   

  function addItem() {
      onItem(numItems + 1);
   }

  function deleteItem() {
      if (numItems === 0) {
        onItem(0);
      }
      else onItem(numItems - 1);
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
              <AddButton />
              <DeleteButton />
            </div>
            
          </div>
          
        ))}
      </div>
    )
  }
   



    return (
        <>
            
            <Nav />
            <Cards />
            
        </>
        
        
    )
}

export default Shop;