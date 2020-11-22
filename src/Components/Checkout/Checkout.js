import React from 'react'
import Image200 from '../img/Amazon.ad.jpg'
import './Checkout.css'

function Checkout() {

    // const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
           <img className="checkout__ad" 
           src={Image200} 
           alt="image"/>
           
        </div>
    )
}

export default Checkout
