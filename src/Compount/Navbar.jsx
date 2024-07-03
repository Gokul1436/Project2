import React from 'react'
import'./Navbar.css'
import{Link} from "react-router-dom"
{/* <button  className="no"type='button' > Mens</button> */}
const Navbar = () => {
  return (
    <>
    <div className='container-fluid '>
      <nav>
      <div className='dd'>
      <img src="logo.png" alt="ggg"  className="nav-logo"/>
      <h1 className=' nav-header'>SHOPPER</h1>
      <ol>
        <li className='h'>
        <Link to="/">Shop</Link> 

        </li>
        <li> 
        <Link to="/Mens.jsx">Mens</Link>
        </li>
        <li>
        <Link to="/Womens.jsx">Womens</Link>
        </li>
        <li>
        <Link to="/Kids.jsx">Kids</Link>
        </li>

      </ol>
      <button type="button" class="btn btn12 btn-outline-secondary rounded-pill"> <Link to="/Login.jsx">Login</Link></button>
      <button type="icon" class="btn cart-btn btn-outline-secondary rounded-pill"><img src="public/cart_icon.png" className='cart' alt="g" /></button>
    

      </div>
      </nav>
     
    
    </div>
  
    </>
  )
}

export default Navbar
