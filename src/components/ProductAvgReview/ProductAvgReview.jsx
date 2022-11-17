import './ProductAvgReview.css';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';
import { getReviewsAverage } from '../../API';

export const ProductAvgReview = ({ product }) => {
	const [avgReview, setAvgReview] = useState(0);

	useEffect(() => {
		(async () => {
			let avgReview = await getReviewsAverage(product?.id);
			setAvgReview(JSON.parse(await avgReview.text()));
		})();
	}, [product?.id]);

	return (
		<div className="ProductAvgReview">
			<span>
				<StarIcon className="AvgReviewIcon" /> <strong>{avgReview}</strong>
			</span>
		</div>
	);
};
