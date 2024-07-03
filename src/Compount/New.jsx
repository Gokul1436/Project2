import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <>
      <div className="container-fuild ee">
        <div className="card item-card" >
          <img src={props.image} className="card-img-top" alt="nothing" />
          <div className="card-body">
            <p className="card-title">{props.name}</p>
            <h5 className='price-new'>${props.new_price}</h5>
            <h5 className='price-old'>${props.old_price}</h5><br/>
            <button type="button" class="btn btn-dark rounded-pill" >View more</button>
            </div>
        </div>
      </div>
      


    </>
  )
}

export default Item
