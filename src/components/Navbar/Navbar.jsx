import React from 'react';
import './Navbar.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BRAND, REGISTER, SIGN_IN } from '../../constants';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="Navbar-left"></div>
			<div className="Navbar-center">
				<p>{BRAND}</p>
				<SelfImprovementIcon className="Icon" />
			</div>
			<div className="Navbar-right">
				<Link to={`/products/favorites`} productsType={"FAVORITES"}>
					<FavoriteBorderIcon className="Navbar-item" />
				</Link>
				<Link to={`/products/watchlist`} productsType={"WATCHLIST"}>
					<VisibilityIcon className="Navbar-item" />
				</Link>
				<Link to={`/register`} className="Navbar-Link">
					<p className="Navbar-item">{REGISTER}</p>
				</Link>
				{!localStorage.getItem("userId") &&
					<Link to={`/login`} className="Navbar-Link">
						<p className="Navbar-item">{SIGN_IN}</p>
					</Link>
				}
			</div>
		</div>
	);
};