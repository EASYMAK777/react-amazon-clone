import React from 'react'
import "../Checkout/Checkout.css"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider/StateProvider'
import Subtotal from "../Subtotal/Subtotal"
import image1 from "../img/Fruity-Pebble-Cereal-Treats-Recipe-3.jpg"

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className = "checkout">
            <div className = " checkout__left">
                <img className = "checkout__ad" 
                src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt="advertisement"/>
            </div>

            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>

                {basket.map(item => (
                    <CheckoutProduct
                    // id={item.id}
                    // title={item.title}
                    // image={item.image}
                    // price={item.price}
                    // rating={item.rating}

                        id="02311"
                        title="edible"
                        image ={image1}
                        price= {15.99}
                        rating="10/10"
                    />
                ))}
                    
                {/* CheckoutProduct*/}
                {/* CheckoutProduct*/}
                {/* CheckoutProduct*/}
                {/* CheckoutProduct*/}
                {/* CheckoutProduct*/}
            </div>

            <div className="checkout__right">
                <h2>Subtotal goes here</h2>

                <Subtotal/>
            </div>
           
        </div>
    )
}

export default Checkout
