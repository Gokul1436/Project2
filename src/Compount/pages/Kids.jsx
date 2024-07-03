import React from 'react';
import Navbar from '../Navbar';
import Kid from './Kid';
import all_Kids from '../../../public/Assets/all_kids'

const Kids = () => {
  return (
    <>
    <Navbar/>
     <img src="public/Assets/banner_kids.png" style={{margin:"30px"}} alt="bannr" />
    <div className='POPULAR IN KIDS'>
            <h1 className='head'>NEW COLLECTIONS</h1>
            <hr className='hr' />
            <div className="popular-item">
                {all_Kids.map((item, i) => {
                 
                  return <Kid key={i} id={item.id} name={item.name} category={item. category=="womens"}image={item.image} new_price={item.new_price}
                    old_price={item.old_price}/>
                })}
            </div>
            <button type="button" class="btn  btn-outline-secondary rounded-pill" style={{marginLeft:"590px",marginTop:"50px"}}>Explore More </button><br/>
            <img src="public/Assets/logo_big.png"  style={{marginLeft:"590px",marginTop:"50px"}} alt="logo" />
            
            
        </div>
    
   
    
    </>
  )
}

export default Kids
