import { useState, useEffect } from 'react';
import { Product } from '../Product/Product';
import { allProducts } from '../../data';
import { NO_PRODUCTS } from '../../constants';
import './Products.css';

export const Products = () => {
	const [products, setProducts] = useState(allProducts);

	useEffect(() => {
		const fetchedProducts = allProducts; // TO DO: fetch products
		setProducts(fetchedProducts);
	}, []);

	return (
		<div className="Products">
			{products.length > 0 ? (
				products.map((item) => <Product key={item.id} product={item} />)
			) : (
				<p className="Products-none">{NO_PRODUCTS}</p>
			)}
		</div>
	);
};
