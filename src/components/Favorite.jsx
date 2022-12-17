import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postFavorite, checkIfFavorite } from '../API';

const StyledFavorite = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff4538'
	},
	'& .MuiRating-iconHover': {
		color: '#ff4538'
	}
});

export default function Favorite({ product }) {
	const uid = localStorage.getItem('userId');
	const [isFav, setIsFav] = useState(false);
	const [isAlreadyFav, setIsAlreadyFav] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		console.log('np');
		if (uid) {
			const pid = product.id;
			checkIfFavorite(uid, pid)
				.then((res) => {
					if (res) {
						setIsFav(true);
						setIsAlreadyFav(true);
					}
				})
				.catch((err) => {
					console.log('Cannot parse to JSON!');
				});
		}
	});

	const handleAddToFavorites = () => {
		if (uid) {
			if (!isAlreadyFav) {
				postFavorite(uid, product);
			}
			setIsFav(!isFav);
		} else {
			window.alert('You need to be logged in for this operation!');
			navigate('/login');
		}
	};

	console.log('render');
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
