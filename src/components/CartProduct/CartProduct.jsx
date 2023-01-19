import './CartProduct.css';
import React from 'react';
import { getImageForProduct } from '../../API';

export const CartProduct = ({ id, name, price }) => {
	const [imgSrc, setImgSrc] = React.useState('');

	React.useEffect(() => {
		(async () => {
			const response = await getImageForProduct(id);
			const responseText = await response.text();
			setImgSrc(`data:image/png;base64,${responseText}`);
		})();
	}, [id]);

	return (
		<div className="CartProduct">
			<span className="CartProduct-image-box">
				<img src={imgSrc} style={{ height: '120px' }} alt="Product icon" />
			</span>
			<span className="CartProduct-about">
				<h1 className="CartProduct-title">{name}</h1>
			</span>
			<span className="CartProduct-counter"></span>
			<span className="CartProduct-prices">{price} RON</span>
		</div>
	);
};
