import React from 'react';
import Navbar from '../Navbar';
import all_women from '../../../public/Assets/all_women';
import Women from './Women';
 
const Womens = () => {
  return (
    <>
    <Navbar/>
    <div>
    <img src="public/banner_women.png" style={{margin:"30px"}} alt="bannr" />
    </div>
    <div className='POPULAR IN WOMENS'>
            <h1 className='head'>NEW COLLECTIONS</h1>
            <hr className='hr' />
         <div className="popular-item">
          {all_women.map((item, i) => {
                   return <Women key={i} id={item.id} name={item.name} category={item. category}image={item.image} new_price={item.new_price}
                         old_price={item.old_price} />
                  
                
                })}
            </div>
            <button type="button" class="btn  btn-outline-secondary rounded-pill" style={{marginLeft:"590px",marginTop:"50px"}}>Explore More </button><br/>
            <img src="public/Assets/logo_big.png"  style={{marginLeft:"590px",marginTop:"50px"}} alt="logo" />
            
        </div>
    
   
    
    </>
  )
}

export default Womens
