import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { postFavorite } from '../API';
import { useState } from 'react';

const StyledFavorite = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff4538'
	},
	'& .MuiRating-iconHover': {
		color: '#ff4538'
	}
});

export default function Favorite({ product, favorite }) {
	const temporaryUID = 1;
	const [isFav, setIsFav] = useState(favorite === 0 ? true : false);

	const handleAddToFavorites = () => {
		if (!isFav) {
			postFavorite(temporaryUID, product);
		}
		setIsFav(!isFav);
	};

	return (
		<StyledFavorite
			name="customized-color"
			value={isFav ? 1 : 0}
			max={1}
			icon={<FavoriteIcon fontSize="inherit" />}
			emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			onClick={() => handleAddToFavorites()}
		/>
	);
}
