import { Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#50c878'
	},
	'& .MuiRating-iconHover': {
		color: '#50c878'
	}
});

export const Review = ({ value }) => {
	const [stars, setStars] = useState(value ? value : 0);

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
