import React from 'react'
// import "../Payment/Payment.css"
import Navbar from "../Navbar/navbar"

function Payment(){
    return(
        <div className = "payment">
          <div className="payment__container">
              {/* Payment Section - deliver addres */}
            <div className = "payment__section">
                <h3>Delivery Address</h3>
            </div>

            <div className="payment__address">

            </div>

              
              {/* Payment Section - Review Items */}
            <div className = "payment__section">
                <h3>Review Your Items</h3>
            </div>

              {/* Payment Method  */}
            <div className = "payment__section">
               <h3>Payment Method</h3> 
            </div>  
          
          

          </div>
        </div>
    )
}

export default Payment()