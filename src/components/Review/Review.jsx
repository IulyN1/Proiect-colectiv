import { Button, Input, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { postReview } from '../../API';
import './Review.css';

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#50c878'
	},
	'& .MuiRating-iconHover': {
		color: '#50c878'
	}
});

export const Review = ({ product }) => {
	const temporaryUID = 1;
	const [stars, setStars] = useState(0);
	const [reviewText, setReviewText] = useState('');

	const handleSendReview = () => {
		if (stars > 0) {
			postReview(temporaryUID, product?.id, stars, reviewText);
			window.location.reload();
		}
	};

	return (
		<div className="RatingContainer">
			<span>
				Give a review:
				<StyledRating
					name="product-rating"
					value={stars}
					className="ProductRatingIcon"
					onChange={(event) => {
						setStars(parseInt(event.target.value));
					}}
				/>
			</span>
			<Input
				placeholder={'Give product a review'}
				value={reviewText}
				onChange={(event) => {
					setReviewText(event.target.value);
				}}
				multiline={true}
			/>
			<Button onClick={() => handleSendReview()}>Send review</Button>
		</div>
	);
};
