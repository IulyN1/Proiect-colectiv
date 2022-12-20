import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToWatchlist.css';
import { addToWatchlist, deleteFromWatchlist, isOnWatchlistForUID } from '../../API';

export default function AddToWatchlist(props) {
	const product = props.product;
	const [checked, setChecked] = useState(false);
	const uid = localStorage.getItem('userId');
	const navigate = useNavigate();

	useEffect(() => {
		const pid = props.product.id;
		if (uid) {
			isOnWatchlistForUID(uid, pid)
				.then((res) => {
					if (res) {
						setChecked(true);
					}
				})
				.catch((err) => {
					console.log('Cannot parse response!');
				});
		}
	});

	const handleAddToWatchlist = (value) => {
		if (uid) {
			if (!checked) {
				addToWatchlist(uid, product).catch((err) => {
					console.log('Cannot parse response!');
				});
				setChecked(true);
			} else {
				const pid = props.product.id;
				deleteFromWatchlist(uid, pid).catch((err) => {
					console.log('Cannot parse response!');
				});
				setChecked(false);
			}
		} else {
			setChecked(false);
			window.alert('You need to be logged in for this operation!');
			navigate('/login');
		}
	};

	return (
		<div className={'WL-Rounded'}>
			<FormControlLabel
				control={
					<Checkbox
						icon={<BookmarkBorder />}
						checkedIcon={<Bookmark />}
						checked={checked}
						onChange={(event) => {
							setChecked(event.target.checked);
							handleAddToWatchlist(event.target.checked);
						}}
						sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
					/>
				}
				label={
					<Box component="div" fontSize={16}>
						Add to watchlist
					</Box>
				}
				className={'ProductFavoriteLabel'}
				labelPlacement={'start'}
				sx={{ fontSize: 10 }}
			/>
		</div>
	);
}
