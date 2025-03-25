import { data, Link, Outlet } from "react-router-dom";
import CartLogo from "./Logo";
import logo from './assets/stock-increase-svgrepo-com.svg';
import './Shop.css';
import { useState } from "react";
import { useEffect } from "react";





 

const Shop = () => {
  function Nav() {
    return (
      <nav className="navigation">
        <div><Link to="/" className="home-link">Home</Link></div><div></div><img src={logo} alt="logo" className='logo' /><div className='check-out-nav'>
          <Link to="cart" className='check-out-btn'>Check out</Link><CartLogo /><div className="number-items">{numItems}</div></div>
        </nav>
    )
  }

  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data));
      
  }, [])

  function AddButton() {
    return (
      <button onClick={addItem}>Add Item</button>
    )
  }

  function DeleteButton() {
    return(
      <button onClick={deleteItem}>Delete Item</button>
    )
  }
   // Num of items added to cart
   const [numItems, setNumItems] = useState(0);
   // shop items
   const [items, setItems] = useState([]);
   

  function addItem() {
      setNumItems(numItems + 1)
   }

  function deleteItem() {
      if (numItems === 0) {
        setNumItems(0);
      }
      else setNumItems(numItems - 1);
   }

  function Cards() {
    return (
      <div className="cards-container">
        {items.map((item) => (
          <>
            <img src={item.image} className="item-img" />
            <div key={item.id}>{item.title}</div>
          </>
          
        ))}
      </div>
    )
  }
   



    return (
        <>
            <Nav />
            <h1>Shop</h1>
            <AddButton />
            <DeleteButton />
            <Cards />
            
        </>
        
        
    )
}

export default Shop;