import { useLocation } from 'react-router-dom';
import { Review } from '../Review/Review';
import './Product.css';
import Favorite from '../Favorite';
import { ReviewList } from '../ReviewList/ReviewList';
import { ProductAvgReview } from '../ProductAvgReview/ProductAvgReview';

export const Product = () => {
	const location = useLocation();
	const product = location.state.product;
	const favorite = location.state.favorite;

	return (
		<div className="Product">
			<p className="Rounded">
				<span className="ProductFavoriteLabel">Favorite</span>
				<span className="ProductInteractionIcon">
					<Favorite product={product} favorite={favorite} />
				</span>
			</p>
			<p>
				<span>Name: {product?.name}</span>
			</p>
			<p>
				<span>Price: {product?.price}</span>
			</p>
			<Review product={product} />
			<ReviewList product={product} />
			<ProductAvgReview product={product} />
		</div>
	);
};
