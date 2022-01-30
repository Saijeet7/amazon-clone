import React from 'react'
import "./Product.css"
function Product() {
  return (
    <div className="product">
        <div className="product__info">
            <p>The product information</p>
            <p className="product__price">
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product__rating">
                <p>*</p>
            </div>
        </div>
        <img src="https://m.media-amazon.com/images/I/51T-sMqSMiL._AC_SY780_.jpg" alt="" />
        <button>Add to Basket</button>
    </div>
  )
}

export default Product
