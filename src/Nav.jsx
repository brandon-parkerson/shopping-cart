import { data, Link, Outlet } from "react-router-dom";
import CartLogo from "./Logo";
import logo from './assets/stock-increase-svgrepo-com.svg';
import './Shop.css';


export default function Nav({numItems}) {
    return (
      <nav className="navigation">
        <div><Link to="/shop" className="home-link">Shop</Link></div><div></div><img src={logo} alt="logo" className='logo' /><div className='check-out-nav'>
          <Link to="/cart" className='check-out-btn' >Check out</Link><CartLogo /><div className="number-items">{numItems}</div></div>
        </nav>
    )
  }

export function CheckoutNav() {
  
  return (
    <nav className="navigation">
      <div><Link to="/" className="home-link">Home</Link></div><div></div><img src={logo} alt="logo" className='logo' /><div className='check-out-nav'>
        <Link to="/shop" className='check-out-btn' >Shop</Link></div>
      </nav>
  )
}

