import React, { useCallback, useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { PRODUCTS_NAVBAR } from '../constants';
import './ProductPage.css';
import './CartPage.css';
import { CartProduct } from '../components/CartProduct/CartProduct';
import { NO_PRODUCTS } from '../constants';
import {deleteItemFromCart, getCartProducts} from '../API';

const CartPage = () => {
	const [total, setTotal] = useState(0);
	const [itemsNo, setItemsNo] = useState(0);
	const uid = localStorage.getItem('userId');
	const [produse, setProduse] = useState([]);

	React.useEffect(() => {
		(async () => {
			let fetchItems = await getCartProducts(uid);
			setProduse(JSON.parse(await fetchItems.text()));
		})();
	}, [uid]);

	const sumTotal = useCallback(() => {
		let suma = 0;
		produse.map((item) => (suma += item.price));
		setTotal(suma);
	}, [produse]);

	const itemsCounter = useCallback(() => {
		let counter = produse.length;
		setItemsNo(counter);
	}, [produse]);

	React.useEffect(() => {
		sumTotal();
		itemsCounter();
	}, [itemsCounter, produse, sumTotal]);

	const clearCart = () => {
		produse.forEach((produs) => {
			deleteItemFromCart(uid, produs.id)
				.then((res)=>{
				})
				.catch((err)=> {
					console.log("Couldn't complete delete request!");
				})
		})
		setProduse([]);

	}

	const onClickDeleteProduct = (pid) => {
		deleteItemFromCart(uid, pid)
			.then((res)=>{
				let localProduse = produse;
				localProduse = localProduse.filter((produs) => produs.id !== pid);
				setProduse(localProduse);
			})
			.catch((err)=> {
				console.log("Couldn't complete delete request!");
			})

	}

	return (
		<div className="CartPage">
			<Navbar />
			<div className="ProductPage-navbar">{PRODUCTS_NAVBAR}</div>
			<div className="CartPage-body">
				<div className={'CartPage-shopping-cart'}>
					<div className="CartPage-Header">
						<h3 className="CartPage-Heading">Shopping Cart</h3>
						<h5 className="CartPage-Action" onClick={clearCart}>Remove all</h5>
					</div>
					<div className="CartPage-items">
						{produse.length > 0 ? (
							produse.map((produs) => (
								<CartProduct
									id={produs.id}
									name={produs.name}
									price={produs.price}
									onDelete={onClickDeleteProduct}
								/>
							))
						) : (
							<p className="Products-none">{NO_PRODUCTS}</p>
						)}
					</div>

					<hr />

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
