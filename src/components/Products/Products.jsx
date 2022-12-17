import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { NO_PRODUCTS } from '../../constants';
import './Products.css';
import { getFavorites, getProducts, getWatchlist } from '../../API';
import { ProductsType } from '../../enums.ts';

export const Products = ({ productsType }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			let fetchItems = productsType === ProductsType.Favorites ? await getFavorites(1) : productsType === ProductsType.AllProducts ? await getProducts() : await getWatchlist(1);
			setProducts(JSON.parse(await fetchItems.text()));
		})();
	}, [productsType]);

	return (
		<div className="Products">
			{products.length > 0 ? (
				products.map((item) => <ProductCard key={item.id} product={item} productType={productsType} />)
			) : (
				<p className="Products-none">{NO_PRODUCTS}</p>
			)}
		</div>
	);
};