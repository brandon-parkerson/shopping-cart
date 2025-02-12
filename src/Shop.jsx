import { Link, Outlet } from "react-router-dom";
import CartLogo from "./Logo";
import logo from './assets/stock-increase-svgrepo-com.svg';
import './Shop.css';

function Nav() {
    return (
      <nav className="navigation">
        <div><Link to="/" className="home-link">Home</Link></div><div></div><img src={logo} alt="logo" className='logo' /><div className='check-out-nav'>
          <Link to="cart" className='check-out-btn'>Check out</Link><CartLogo /></div>
        </nav>
    )
  }
const Shop = () => {
    return (
        <>
            <Nav />
            <h1>Shop</h1>
            
        </>
        
        
    )
}

export default Shop;