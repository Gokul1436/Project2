import React from 'react';
import Navbar from '../Navbar';
import Men from './Men';
import all_men from '../../../public/Assets/all_men';

const Mens = () => {
  return (
    <>
    <Navbar/>
     <img src="public/Assets/banner_mens.png" style={{margin:"30px"}} alt="bannr" />
    <div className='POPULAR IN MENS'>
            <h1 className='head'>NEW COLLECTIONS</h1>
            <hr className='hr' />
            <div className="popular-item">
                {all_men.map((item, i) => {
                 
                  return <Men key={i} id={item.id} name={item.name} category={item. category=="womens"}image={item.image} new_price={item.new_price}
                    old_price={item.old_price}/>
                                         
                
                })}
            </div>
            <button type="button" class="btn  btn-outline-secondary rounded-pill" style={{marginLeft:"590px",marginTop:"50px"}}>Explore More </button><br/>
            <img src="public/Assets/logo_big.png"  style={{marginLeft:"590px",marginTop:"50px"}} alt="logo" />
            
        </div>
    
   
    
    </>
  )
}

export default Mens
