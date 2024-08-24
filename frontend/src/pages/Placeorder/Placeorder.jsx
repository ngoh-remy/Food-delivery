import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import './Placeorder.css'

const Placeorder = () => {

  const {getTotalCartAmount} = useContext(Storecontext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email address'/>
        <input type=" text" placeholder='Street'/>
      <div className="multi-fields">
        <input type="text" placeholder='Zip code' />
        <input type="text" placeholder='Country'/>
      </div>
      <input type="text"  placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
        <div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>{getTotalCartAmount()}XAF</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>{getTotalCartAmount()===0?0:1000}XAF</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>{getTotalCartAmount()===0?0: getTotalCartAmount()+1000}XAF</b>
        </div>
      </div>
      <button >PROCEED TO PAYMENT</button>
    </div>

      </div>
      
    </form>
  )
}

export default Placeorder
