import { useState } from 'react'
import './App.css'; 
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


function App() {
  
  return (
    <div className='app-container'>
      <Nav />
      <About />
    </div>
  )
}

export default App 
