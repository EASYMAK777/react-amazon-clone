import React from 'react'
import Image200 from '../img/Amazon.ad.jpg'
import './Checkout.css'
import useStateValue from '../Reducer/Reducer'

function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
           <img className="checkout__ad" 
           src={Image200} 
           alt="image"
           />
           {basket?.length === 0 ? (
             <div>
                 <h2>Your Shopping Basket is empty</h2>
                 <p>
                     You have no items in your basket.  To buy one or more items, click
                    "Add to basket" next to the item.
                 </p>
             </div>
           ) : (
                <div>
                   <h2 className="checkout__title">Your Shopping Basket</h2>

                   {/* List out all of the checkout Products */}
                    {basket.map(item => (
                    <CheckoutProduct
                     item={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                    />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Checkout
                     
           

