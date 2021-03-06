import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import "../CheckoutProduct/CheckoutProduct.css"



function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch ] = useStateValue();

    //Remove Item from cart
    const removefromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })


    }

    return (
        <div className = "checkoutProduct">
            <img className="checkoutProduct__image" src = {image} />

            <div className="checkoutProduct__info">
                <p className = "checkoutProduct__title">{title}</p>
                <p className = "checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removefromBasket}>Remove from Basket</button>
            </div>
        </div>




    )
}

export default CheckoutProduct
