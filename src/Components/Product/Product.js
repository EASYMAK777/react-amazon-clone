import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {

    const addToBasket = () => {
        //Add item to basket
        dispatchEvent({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    };

    return (
        <div className="product">
          <div className = "product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))}
                        
            </div>
          </div>

            
            <img src ={image} className="product__image" alt="androids book"/>
            <button onClick = {addToBasket} className="button">Add to basket</button>
          
              
            
                

        </div>
        
    )
}

export default Product
                
