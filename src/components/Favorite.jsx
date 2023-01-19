import * as React from 'react';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postFavorite, deleteFavorite, checkIfFavorite } from '../API';

export default function Favorite(props) {
	const uid = localStorage.getItem('userId');
	const product = props.product;
	const [isFav, setIsFav] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (uid) {
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
		}
	});

	const handleAddToFavorites = () => {
		if (uid) {
			if (!isFav) {
				postFavorite(uid, product).catch((err) => {
					console.log('Cannot parse response!');
				});
				setIsFav(true);
			} else {
				const pid = product.id;
				deleteFavorite(uid, pid).catch((err) => {
					console.log('Cannot parse response!');
				});
				setIsFav(false);
			}
		} else {
			setIsFav(false);
			window.alert('You need to be logged in for this operation!');
			navigate('/login');
		}
	};

	return (
		<Rating
			sx={{
				'& .MuiRating-iconFilled': {
					color: '#ff4538'
				},
				'& .MuiRating-iconHover': {
					color: '#ff4538'
				}
			}}
			name="customized-color"
			value={isFav ? 1 : 0}
			max={1}
			icon={<FavoriteIcon fontSize="inherit" />}
			emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			onChange={() => {
				setIsFav(!isFav);
				handleAddToFavorites();
			}}
		/>
	);
}
