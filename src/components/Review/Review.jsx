import { Button, Input, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
	const uid = localStorage.getItem('userId');
	const [stars, setStars] = useState(0);
	const [reviewText, setReviewText] = useState('');
	const navigate = useNavigate();

	const handleSendReview = () => {
		if (uid) {
			if (stars > 0) {
				postReview(uid, product?.id, stars, reviewText).then((res) => {
					window.location.reload();
				});
			}
		} else {
			window.alert('You need to be logged in for this operation!');
			navigate('/login');
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
