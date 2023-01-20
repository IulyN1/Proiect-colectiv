import './CartProduct.css';
import React from 'react';
import { getImageForProduct } from '../../API';
import DeleteIcon from '@mui/icons-material/Delete';

export const CartProduct = ({ id, name, price, onDelete }) => {
	const [imgSrc, setImgSrc] = React.useState('');

	const deleteItem = () => {
		onDelete(id);
	}

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
			<span>
                <DeleteIcon
					className={"CartProduct-Delete"}
					onClick={deleteItem}
				/>
            </span>
		</div>
	);
};
