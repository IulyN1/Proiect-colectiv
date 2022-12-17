import { useLocation } from 'react-router-dom';
import { Review } from '../Review/Review';
import './Product.css';
import Favorite from '../Favorite';
import { ReviewList } from '../ReviewList/ReviewList';
import { ProductAvgReview } from '../ProductAvgReview/ProductAvgReview';
import AddToWatchlist from "../AddToWatchlist/AddToWatchlist";

export const Product = () => {
	const location = useLocation();
	const product = location.state.product;
	const productType = location.state.productType;

	return (
		<div className="Product">
			<AddToWatchlist
				product = {product}
			/>
			<p className="Rounded">
				<span className="ProductFavoriteLabel">Favorite</span>
				<span className="ProductInteractionIcon">
					<Favorite product={product} productType={productType} />
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
