import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
	return (
		<div className="ProductCard">
			<p>{product?.name}</p>
			<Link to={`/products/${product.id}`} state={product}>
				<span>View more details</span>
				<span className="ArrowIcon">
					<ArrowForwardIcon />
				</span>
			</Link>
		</div>
	);
};
