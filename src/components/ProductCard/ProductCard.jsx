import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { getImageForProduct } from '../../API';

export const ProductCard = ({ product }) => {
	const [imageSrc, setImageSrc] = React.useState('');

	React.useEffect(() => {
		(async () => {
			const response = await getImageForProduct(product?.id);
			const responseText = await response.text();
			setImageSrc(`data:image/png;base64,${responseText}`);
		})();
	}, [product]);

	return (
		<div className="ProductCard">
			<Link to={`/products/${product.id}`} state={{ product }}>
				<img className="ProductImage" src={imageSrc} alt={product?.name} />
			</Link>
			<p>{product?.name}</p>
		</div>
	);
};
