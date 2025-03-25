import { Link, Outlet } from "react-router-dom";
import CartLogo from "./Logo";
import logo from './assets/stock-increase-svgrepo-com.svg';
import './Shop.css';
import { useState } from "react";




 

const Shop = () => {
  function Nav() {
    return (
      <nav className="navigation">
        <div><Link to="/" className="home-link">Home</Link></div><div></div><img src={logo} alt="logo" className='logo' /><div className='check-out-nav'>
          <Link to="cart" className='check-out-btn'>Check out</Link><CartLogo /><div className="number-items">{numItems}</div></div>
        </nav>
    )
  }
   // Num of items added to cart
   const [numItems, setNumItems] = useState(0);
   

   function addItem() {
      setNumItems(numItems + 1)
   }

   function deleteItem() {
      setNumItems(numItems - 1)
   }
    return (
        <>
            <Nav />
            <h1>Shop</h1>
            <button onClick={addItem}>Add Item</button>
            <button onClick={deleteItem}>Delete Item</button>
            
        </>
        
        
    )
}

export default Shop;