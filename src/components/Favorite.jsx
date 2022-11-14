import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {postFavorite} from "../API";
import {useEffect, useState} from "react";

const StyledFavorite = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff4538'
	},
	'& .MuiRating-iconHover': {
		color: '#ff4538'
	}
});

export default function Favorite({product}) {
	const temporaryUID =1;
	const [clicked, setClicked] = useState(false);
	useEffect(() => {
		if(clicked){
			postFavorite(temporaryUID, product);
		}
	}, [clicked, setClicked, product])
	return (
		<StyledFavorite
			name="customized-color"
			max={1}
			icon={<FavoriteIcon fontSize="inherit" />}
			emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			onClick={()=> {
					setClicked(!clicked);
			}}
		/>
	);
}
