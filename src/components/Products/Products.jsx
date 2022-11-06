import React from "react";
import './Products.css';
import { Product } from "../Product/Product";
import { allProducts } from "../../data";
import { NO_PRODUCTS } from "../../constants";

export const Products = () => {
    const [products, setProducts] = React.useState(allProducts);

    return (
        <div className="Products">
            {products.length > 0 ? 
            products.map((item) =>
                <Product key={item.id} product={item}/>) 
                : <p className="Products-none">{NO_PRODUCTS}</p>}
        </div>
    )
};