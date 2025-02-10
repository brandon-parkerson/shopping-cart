import { useState } from 'react'
import './App.css'; 
import logo from './assets/stock-increase-svgrepo-com.svg'
import Cart from './Logo';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div><Link to="shop">Shop</Link></div><div></div><img src={logo} alt="logo" className='logo' /><div className='check-out-nav'>
        <button className='check-out-btn'>Check out</button><Cart /></div>
      </nav>
  )
}

function About() {
  return (
    <h2>Effortlessy blend comfort and style!</h2>
  )
}


function App() {
  
  return (
    <div className='app-container'>
      <Nav />
      <About />
    </div>
  )
}

export default App
