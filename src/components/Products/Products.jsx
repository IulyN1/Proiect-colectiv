import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { allProducts, favProducts } from '../../data';
import { NO_PRODUCTS } from '../../constants';
import './Products.css';

export const Products = ({ favorites }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		let fetchedProducts;
		favorites === 0 ? fetchedProducts = favProducts : fetchedProducts = allProducts;	//TO DO: fetch products
		setProducts(fetchedProducts);
	}, [favorites]);

	return (
		<div className="Products">
			{products.length > 0 ? (
				products.map((item) => <ProductCard key={item.id} product={item} />)
			) : (
				<p className="Products-none">{NO_PRODUCTS}</p>
			)}
		</div>
	);
};
