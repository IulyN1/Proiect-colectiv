import React, {useEffect, useState} from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { PRODUCTS_NAVBAR } from '../constants';
import './ProductPage.css';
import './CartPage.css';
import {CartProduct} from "../components/CartProduct/CartProduct";
import {getImageForProduct} from "../API";

const CartPage = () => {
    const [total, setTotal] = useState(65);
    const [itemsNo, setItemsNo] = useState(0);

    const [produse, setProduse] = useState([
        {
            id: 1,
            name: "Sampon anti-matreata Vichy Dercos",
            price: 39,
            image: ""
        },
        {
            id: 2,
            name: "Crema de zi Nivea pentru ten normal",
            price: 28,
            image: ""
        },
        {
            id: 3,
            name: "Crema anti-rid de zi Nivea",
            price: 24,
            image: ""
        },{
            id: 4,
            name: "Sampon anti-matreata Vichy Dercos",
            price: 39,
            image: ""
        },
        {
            id: 5,
            name: "Crema de zi Nivea pentru ten normal",
            price: 28,
            image: ""
        },
        {
            id: 6,
            name: "Crema anti-rid de zi Nivea",
            price: 24,
            image: ""
        },{
            id: 7,
            name: "Sampon anti-matreata Vichy Dercos",
            price: 39,
            image: ""
        },
        {
            id: 8,
            name: "Crema de zi Nivea pentru ten normal",
            price: 28,
            image: ""
        },
        {
            id: 9,
            name: "Crema anti-rid de zi Nivea",
            price: 24,
            image: ""
        },{
            id: 10,
            name: "Sampon anti-matreata Vichy Dercos",
            price: 39,
            image: ""
        },
        {
            id: 11,
            name: "Crema de zi Nivea pentru ten normal",
            price: 28,
            image: ""
        },
        {
            id: 12,
            name: "Crema anti-rid de zi Nivea",
            price: 24,
            image: ""
        },
    ]);

    const sumTotal = () => {
        let suma = 0;
        produse.map(item => suma += item.price);
        setTotal(suma);
    }

    const itemsCounter = () => {
        let counter = produse.length;
        setItemsNo(counter);
    }

    React.useEffect(() => {
        sumTotal();
        itemsCounter();
    }, [produse]);

    console.log(produse);

    const clearCart = () => {
        setProduse([]);
    }

    const onClickDeleteProduct = (id) => {
        let localProduse = produse;
        localProduse = localProduse.filter((produs) => produs.id !== id);
        setProduse(localProduse);
    }

    return (
        <div className="CartPage">
            <Navbar />
            <div className="ProductPage-navbar">{PRODUCTS_NAVBAR}</div>
            <div className="CartPage-body">
                <div className={"CartPage-shopping-cart"}>
                    <div className="CartPage-Header">
                        <h3 className="CartPage-Heading">Shopping Cart</h3>
                        <h5 className="CartPage-Action" onClick={clearCart}>Remove all</h5>
                    </div>
                    <div className="CartPage-items">
                        {produse.map(produs =>
                            <CartProduct
                                id={produs.id}
                                name={produs.name}
                                price={produs.price}
                                image={produs.image}
                                onDelete={onClickDeleteProduct}
                            />
                        )}
                    </div>

                    <hr/>

                    <div className="CartPage-checkout">
                        <div className="CartPage-total">
                            <div>
                                <div className="CartPage-Subtotal">Sub-Total</div>
                                <div className="CartPage-items-counter">{itemsNo} items</div>
                            </div>
                            <div className="CartPage-total-amount">{total} RON</div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
