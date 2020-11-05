import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                
                <small>$</small>
                <strong>{price}</strong>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                       <div className="product__image">
                        <img src ={image} alt="androids book"/>
                        <button>Add to basket</button>
                        </div> 
                           
                </div>
            </p>

            </div>
        </div>
    )
}

export default Product
