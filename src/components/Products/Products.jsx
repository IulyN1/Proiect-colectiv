import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { NO_PRODUCTS } from '../../constants';
import './Products.css';
import { getFavorites, getProducts, getWatchlist } from '../../API';
import { ProductsType } from '../../enums.ts';

export const Products = ({ productsType }) => {
	const [products, setProducts] = useState([]);
	const uid = localStorage.getItem('userId');

	useEffect(() => {
		(async () => {
			let fetchItems =
				productsType === ProductsType.Favorites
					? await getFavorites(uid)
					: productsType === ProductsType.AllProducts
					? await getProducts()
					: await getWatchlist(uid);
			setProducts(JSON.parse(await fetchItems.text()));
		})();
	}, [productsType, uid]);

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
