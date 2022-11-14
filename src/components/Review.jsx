import { Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useEffect, useState} from 'react';
import {getReviewAverage, postReview} from "../API";

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
	const [stars, setStars] = useState(getReviewAverage(product) ? getReviewAverage(product) :  0);
	useEffect(() => {
			postReview(temporaryUID, product);
	}, [stars, setStars, product])
	return (
		<StyledRating
			name="product-rating"
			value={stars}
			onChange={(event, newValue) => {
				setStars(newValue);
			}}
		/>
	);
};
