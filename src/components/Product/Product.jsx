import React from 'react';
import { useLocation } from 'react-router-dom';
import { Review } from '../Review/Review';
import './Product.css';
import Favorite from '../Favorite';
import { ReviewList } from '../ReviewList/ReviewList';
import { ProductAvgReview } from '../ProductAvgReview/ProductAvgReview';
import AddToWatchlist from '../AddToWatchlist/AddToWatchlist';
import { getImageForProduct } from '../../API';

export const Product = () => {
	const location = useLocation();
	const product = location.state.product;
	const [imageSrc, setImageSrc] = React.useState('');

	React.useEffect(() => {
		(async () => {
			const response = await getImageForProduct(product?.id);
			const responseText = await response.text();
			setImageSrc(`data:image/png;base64,${responseText}`);
		})();
	}, [product]);

	return (
		<div className="Product">
			<h3>
				<span> {product?.name}</span>
			</h3>
			<div className="ProductDetails">
				<img className="Product-Image" src={imageSrc} alt={product?.name} />
				<div>
					<p>
						<span>
							<b>Price:</b> {product?.price}
						</span>
					</p>
					<AddToWatchlist product={product} />
					<p className="Rounded">
						<span className="ProductFavoriteLabel">Favorite</span>
						<span className="ProductInteractionIcon">
							<Favorite product={product} />
						</span>
					</p>{' '}
					<br></br>
					<Review product={product} />
					<ReviewList product={product} />
					<ProductAvgReview product={product} />
				</div>
			</div>
		</div>
	);
};
