import './ReviewList.css';
import { useEffect, useState } from 'react';
import { getReviews, deleteReview } from '../../API';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ReviewList = ({ product }) => {
	const uid = +localStorage.getItem('userId');
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		(async () => {
			let fetchItems = await getReviews(product?.id);
			setReviews(JSON.parse(await fetchItems.text()));
		})();
	}, [product?.id]);

	const handleOnDeleteClicked = (review) => {
		deleteReview(review)
			.then((res) => {
				window.location.reload();
			})
			.catch((err) => {
				console.log("Couldn't complete delete request!");
			});
	};

	return (
		<div className="ReviewListContainer">
			<strong>Reviews</strong>
			<ul className="ReviewList">
				{reviews.length > 0 ? (
					reviews.map((review) => (
						<li key={review.id}>
							{' '}
							{review.text} <StarIcon className="ReviewIcon" /> {review.nrOfStars}
							{review.userId === uid ? (
								<IconButton
									aria-label="delete"
									className="DeleteIcon"
									onClick={() => handleOnDeleteClicked(review)}
								>
									<DeleteForeverIcon color="error" />
								</IconButton>
							) : null}
						</li>
					))
				) : (
					<p>{'No reviews yet'}</p>
				)}
			</ul>
		</div>
	);
};
