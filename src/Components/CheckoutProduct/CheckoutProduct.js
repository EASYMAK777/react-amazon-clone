import React from 'react'

function CheckoutProduct({id,title,image,price,rating}) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="image"/>

            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{title}</p>  
            </div>            
        </div>
    )
}

export default CheckoutProduct
