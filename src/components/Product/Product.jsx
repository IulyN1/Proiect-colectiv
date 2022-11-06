import { Review } from './Review';
import './Product.css';

export const Product = ({ product }) => {
	return (
		<div className="Product">
			<p>{product?.description}</p>
			<Review value={product?.review} />
		</div>
	);
};
