import React from 'react'

function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
           <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/
           images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423494660_.jpg" alt="image">
          </img> 
        </div>
    )
}

export default Checkout
