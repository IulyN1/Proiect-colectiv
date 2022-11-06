import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Products } from '../components/Products/Products';
import { PRODUCTS_NAVBAR, PRODUCTS_TITLE } from '../constants';
import './ProductsPage.css';

const ProductsPage = () => {
	return (
		<div className="ProductsPage">
			<Navbar />
			<div className="ProductsPage-navbar">{PRODUCTS_NAVBAR}</div>
			<h3 className="ProductsPage-title">{PRODUCTS_TITLE}</h3>
			<Products />
			<Footer />
		</div>
	);
};

export default ProductsPage;
