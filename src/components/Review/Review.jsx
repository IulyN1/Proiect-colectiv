import {Button, Input, Rating} from '@mui/material';
import { styled } from '@mui/material/styles';
import {useState} from 'react';
import {postReview} from "../../API";

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#50c878'
	},
	'& .MuiRating-iconHover': {
		color: '#50c878'
	}
});

export const Review = ({ product }) => {
	const temporaryUID =1;
	const [stars, setStars] = useState( 0);
	const [reviewText, setReviewText] = useState('');
	/*useEffect(() => {
			postReview(temporaryUID, productId);
	}, [stars, setStars, productId])*/
	return (
		<>
			<StyledRating
				name="product-rating"
				value={stars}
				onChange={(event) => {
					setStars(parseInt(event.target.value));
				}}
			/>
			<Input
				placeholder={"Give us a review"}
				style={{display:"block"}}
				value={reviewText}
				onChange={(event) => {
					setReviewText(event.target.value);
				}}
			/>
			<Button onClick={() => postReview(temporaryUID, product?.id, reviewText)} >Send review</Button>
		</>
	);
};
