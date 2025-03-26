import { Link } from "react-router-dom"
import CartLogo from "./Logo";
import logo from './assets/stock-increase-svgrepo-com.svg';
import './Cart.css'

function Nav() {
    return (
        <>
        <nav className="cart-page-nav">
            <div><Link to="/shop">Shop</Link></div><div></div><img src={logo} alt="logo" className='logo' /><div className='check-out-nav'>
            <Link to="/" className='home-link'>Home</Link></div>
        </nav>
        
        </>
      

    )
  }






export default function Cart({item}) {
    function Total() {
        return (
            <>
                <div>
                    {item}
                </div>
            </>
        )
    }
    return (
        <>
            <Nav />
            <Total />
        </>
        
    )
}