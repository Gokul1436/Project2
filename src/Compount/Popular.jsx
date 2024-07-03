import React from 'react'
import './Popular.css'
import data_product from '../../public/Assets/data.js'
import Item from './Item'

const Popular = () => {
    return (<>
        <div className='POPULAR IN WOMEN'>
            <h1 className='head'>POPULAR IN WOMEN</h1>
            <hr className='hr'/>
            <div className="popular-item">
              {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image}new_price={item.new_price}
                old_price={item.old_price}/>
              })} 
            </div>
        </div>
        <div className="container part2">
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

        </div>
        </>
        
    )
}

export default Popular
