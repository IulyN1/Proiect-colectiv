import './ReviewList.css';
import { useEffect, useState } from 'react';
import { getReviews } from '../../API';
import StarIcon from '@mui/icons-material/Star';

export const ReviewList = ({ product }) => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		(async () => {
			let fetchItems = await getReviews(product?.id);
			setReviews(JSON.parse(await fetchItems.text()));
		})();
	}, [product?.id]);

	return (
		<div className="ReviewListContainer">
			<strong>Reviews</strong>
			<ul className="ReviewList">
				{reviews.length > 0 ? (
					reviews.map((review) => (
						<li key={review.id}>
							{' '}
							{review.text} <StarIcon className="ReviewIcon" /> {review.nrOfStars}
						</li>
					))
				) : (
					<p>{'No reviews yet'}</p>
				)}
			</ul>
		</div>
	);
};
