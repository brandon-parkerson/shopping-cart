import { useState } from 'react'
import './Home.css'; 
import logo from './assets/stock-increase-svgrepo-com.svg'
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div>
      <nav>
      <div><img src={logo} alt="logo" className='logo' /></div><div><Link to="shop">Shop</Link></div>
      </nav>
    </div>
  )
}

function About() {
  return (
    <h2>Effortlessy blend comfort and style!</h2>
  )
}


function Home() {
  
  return (
    <div className='app-container'>
      
      <About />
      
    </div>
  )
}

export default Home 
