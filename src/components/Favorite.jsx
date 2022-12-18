import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postFavorite, deleteFavorite, checkIfFavorite } from '../API';

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
	const [firstLoad, setFirstLoad] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (uid && firstLoad) {
			const pid = product.id;
			checkIfFavorite(uid, pid)
				.then((res) => {
					if (res) {
						setIsFav(true);
					}
				})
				.catch((err) => {
					console.log('Cannot parse response!');
				});
			setFirstLoad(false);
		}
	}, [firstLoad, product.id, uid]);

	const handleAddToFavorites = () => {
		if (uid) {
			if (!isFav) {
				postFavorite(uid, product)
					.then((res) => {
						setIsFav(true);
					})
					.catch((err) => {
						console.log('Cannot parse response!');
					});
			} else {
				deleteFavorite(uid, product.id)
					.then((res) => {
						setIsFav(false);
					})
					.catch((err) => {
						console.log('Cannot parse response!');
					});
			}
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
