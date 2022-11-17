import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { NO_PRODUCTS } from '../../constants';
import './Products.css';
import { getFavorites, getProducts } from '../../API';

export const Products = ({ favorites }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			let fetchItems = favorites === 0 ? await getFavorites(1) : await getProducts();
			setProducts(JSON.parse(await fetchItems.text()));
		})();
	}, [favorites]);

	return (
		<div className="Products">
			{products.length > 0 ? (
				products.map((item) => <ProductCard key={item.id} product={item} favorite={favorites} />)
			) : (
				<p className="Products-none">{NO_PRODUCTS}</p>
			)}
		</div>
	);
};
