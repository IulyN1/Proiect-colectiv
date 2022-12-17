import './ProductAvgReview.css';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';
import { getReviewsAverage } from '../../API';

export const ProductAvgReview = ({ product }) => {
	const [avgReview, setAvgReview] = useState(0);

	useEffect(() => {
		(async () => {
			const response = await getReviewsAverage(product?.id);
			const avgReview = JSON.parse(await response.text());
			const avg = Math.round(avgReview * 100) / 100;
			setAvgReview(avg);
		})();
	}, [product?.id]);

	return (
		<div className="ProductAvgReview">
			{!isNaN(avgReview) ? (
				<span>
					<StarIcon className="AvgReviewIcon" fontSize="large" />{' '}
					<span className="AvgReviewValue">{avgReview}</span>
				</span>
			) : null}
		</div>
	);
};
