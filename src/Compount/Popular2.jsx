import React from 'react'
import './Popular.css'
import new_collections from '../../public/Assets/new_collections'
import New from './New'

const Popular = () => {
    return (<>
        <div className='POPULAR IN WOMEN'>
            <h1 className='head'>NEW COLLECTIONS</h1>
            <hr className='hr' />
            <div className="popular-item">
                {new_collections.map((item, i) => {
                    return <New key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
                        old_price={item.old_price} />
                })}
            </div>
        </div>
        <div className="container part2">

            <div className="col">
                <h1 className=" heade2">Get exclusive Offer On Your Email</h1>
                <p>Subscrible to our newsletter and stay update</p>
                <div>
                    <input type="text" className="input" placeholder="Enter your email id"  />
                    <button className="btn btn1 btn-outline-secondary rounded-pill" type="button" >Button</button>
                </div>


                <img src="public/Assets/logo_big.png"  className='logo' alt="logo" />
                <h1 className='log'>SHOPPER</h1><br/>
                <ol>
                    <li>Company</li>
                    <li>Product</li>
                    <li>Office</li>
                    <li>About</li>
                    <li>Contact</li>

                </ol><br/>
                <img src="public/Assets/instagram_icon.png"  className="im"alt="insta" />
                <img src="public/Assets/pintester_icon.png"  className="im"alt="pinter" />
                <img src="public/Assets/whatsapp_icon.png" className="im" alt="whatapp" />
            </div>


        </div>
    </>

    )
}

export default Popular
