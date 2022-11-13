import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Product } from '../components/Product/Product';
import { PRODUCTS_NAVBAR } from '../constants';
import './ProductPage.css';

const ProductPage = () => {
	return (
		<div className="ProductPage">
			<Navbar />
			<div className="ProductsPage-navbar">{PRODUCTS_NAVBAR}</div>
			<Product />
			<Footer />
		</div>
	);
};

export default ProductPage;
