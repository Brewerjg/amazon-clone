import React from 'react'
import "./product.css"

function Product() {
   return (
    <div className='product'>
        <div className="product__info">
            <p>The lean </p>
            <p className='product__price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product__rating">
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Product
