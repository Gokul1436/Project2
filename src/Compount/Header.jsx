import React from 'react'
import'./Header.css'

const Header = () => {
  return (
    <div className=' container-fuild main '>
        <div className="row bg">
            <div className="col-6">
            <h3 className="h2">New Arrivals Only</h3>
            <h2 className="display-1 header-1">New</h2>
            <img src="public/hand_icon.png"  className="header-img"alt="hi" />  
            <h2 className="display-1 header3">Collection</h2>
            <h2 className="display-1 header3">for everyone</h2>
            <button type="button" class="btn  f rounded-pill btn-danger">Latest Collection &rarr;</button>  
            </div>
            <div className="col-6">
                <img src="public/Assets/hero_image.png"  className="hero"alt="hero" />

            </div>
        </div>
        
        {/* <div className="container part2">
            <div className="row">
                <div className="col-7">
                <h2 className="display-1 heade2">Exclusive</h2>
                <h2 className="display-1 header2">Offers For You</h2>
                <p className='pera'>ONLY ON BEST PRODUCTS</p>
                <button type="button" class="btn  ff rounded-pill btn-danger">Check now</button>  
                </div>
                <div className="col-5">
                    <img src="public/Assets/exclusive_image.png" alt="" />
                </div>
            </div>

        </div> */}
       
    </div>
  )
}

export default Header
