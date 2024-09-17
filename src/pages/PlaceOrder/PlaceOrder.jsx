import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreConetxt'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Streat" />
          <div className="multi-fields">
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="number" placeholder="Pincode"/>
          </div>
          <input type="number" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {30}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>Rs {getTotalCartAmount()+30}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
      </form>
  )
      
}

export default PlaceOrder