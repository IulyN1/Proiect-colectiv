import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { postFavorite } from '../API';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsType } from '../enums.ts';

const StyledFavorite = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff4538'
	},
	'& .MuiRating-iconHover': {
		color: '#ff4538'
	}
});

export default function Favorite({ product, productType }) {
	const uid = localStorage.getItem('userId');
	const [isFav, setIsFav] = useState(productType === ProductsType.Favorite ? true : false);
	const navigate = useNavigate();

	const handleAddToFavorites = () => {
		if (uid) {
			if (!isFav) {
				postFavorite(uid, product);
			}
			setIsFav(!isFav);
		} else {
			window.alert('You need to be logged in for this operation!');
			navigate('/login');
		}
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
