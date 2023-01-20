import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { PRODUCTS_NAVBAR } from '../constants';
import './ProductPage.css';
import './CartPage.css';
import { CartProduct } from '../components/CartProduct/CartProduct';
import { NO_PRODUCTS } from '../constants';
import { deleteItemFromCart, getCartProducts, buyItemsFromCart } from '../API';
import { Button } from '@mui/material';

const CartPage = () => {
	const uid = localStorage.getItem('userId');
	const [total, setTotal] = useState(0);
	const [itemsNo, setItemsNo] = useState(0);
	const [produse, setProduse] = useState([]);
	const [outOfStock, setOutOfStock] = useState(false);
	const navigate = useNavigate();

	React.useEffect(() => {
		(async () => {
			let fetchItems = await getCartProducts(uid);
			setProduse(JSON.parse(await fetchItems.text()));
		})();
	}, [uid]);

	const checkOutOfStock = useCallback(() => {
		const prod = produse.filter((produs) => produs.nrInStock === 0);
		if (prod.length > 0) {
			setOutOfStock(true);
		} else {
			setOutOfStock(false);
		}
	}, [produse]);

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
		checkOutOfStock();
	}, [itemsCounter, produse, sumTotal, checkOutOfStock]);

	const clearCart = () => {
		produse.forEach((produs) => {
			deleteItemFromCart(uid, produs.id)
				.then((res) => {})
				.catch((err) => {
					console.log("Couldn't complete delete request!");
				});
		});
		setProduse([]);
	};

	const onClickDeleteProduct = (pid) => {
		deleteItemFromCart(uid, pid)
			.then((res) => {
				let localProduse = produse;
				localProduse = localProduse.filter((produs) => produs.id !== pid);
				setProduse(localProduse);
			})
			.catch((err) => {
				console.log("Couldn't complete delete request!");
			});
	};

	const buyProducts = () => {
		buyItemsFromCart(uid)
			.then(() => {
				alert('Thanks for your order!');
				navigate('/products');
			})
			.catch(() => {
				console.log("Couldn't complete buy request!");
			});
	};

	const buttonSX = {
		borderColor: '#51d3ac',
		backgroundColor: '#51d3ac',
		display: 'flex',
		justifyContent: 'space-around',
		color: 'white',
		width: '40px',
		height: '40px',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: '20px',
		'&:hover': {
			backgroundColor: '#26e9ae',
			borderColor: '#26e9ae'
		}
	};

	return (
		<div className="CartPage">
			<Navbar />
			<div className="ProductPage-navbar">{PRODUCTS_NAVBAR}</div>
			<div className="CartPage-body">
				<div className={'CartPage-shopping-cart'}>
					<div className="CartPage-Header">
						<h3 className="CartPage-Heading">Shopping Cart</h3>
						<h5 className="CartPage-Action" onClick={clearCart}>
							Remove all
						</h5>
					</div>
					<div className="CartPage-items">
						{produse.length > 0 ? (
							produse.map((produs) => (
								<CartProduct
									key={produs.id}
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
						{produse.length > 0 ? (
							<div className="CartPage-buy-btn">
								<Button sx={buttonSX} onClick={() => buyProducts()} disabled={outOfStock}>
									BUY
								</Button>
							</div>
						) : null}
						{produse.length > 0 && outOfStock ? (
							<span className="CartPage-out-of-stock">One of the products is out of stock!</span>
						) : null}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CartPage;
