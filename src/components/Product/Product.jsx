import React from "react"
import './Product.css';

export const Product = ({ product }) => {
    return(
        <div className="Product">
            <p>{product?.description}</p>
        </div>
    )
};