import { useLocation } from 'react-router-dom';
import { Review } from '../Review';
import './Product.css';
import Favorite from '../Favorite';

export const Product = () => {
	const location = useLocation();
	const product = location.state;

	return (
		<div className="Product">
			<p>
				<span className="ProductFavoriteLabel">Favorite</span>
				<span className="ProductInteractionIcon">
					<Favorite product={product}/>
				</span>
			</p>
			<p>
				<span>Name: {product?.name}</span>
			</p>
			<p>
				<span>Price: {product?.price}</span>
			</p>
			<p>
				<span>Give a rating:</span>
				<span className="ProductInteractionIcon">
					<Review value={product?.review} />
				</span>
			</p>
		</div>
	);
};
