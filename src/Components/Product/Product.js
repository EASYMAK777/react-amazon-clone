import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
        </div>
    )
}

export default Product
