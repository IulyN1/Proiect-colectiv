import React from 'react';
import './Navbar.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BRAND, REGISTER, SIGN_IN } from '../../constants';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

export const Navbar = () => {
	const handleLogout = () => {
		window.location.replace('/login');
	};

	return (
		<div className="Navbar">
			<div className="Navbar-left"></div>
			<div className="Navbar-center">
				<p>{BRAND}</p>
				<SelfImprovementIcon className="Icon" />
			</div>
			<div className="Navbar-right">
				<Tooltip title="Favorites">
					<Link to={`/products/favorites`} productsType={"FAVORITES"}>
						<FavoriteBorderIcon className="Navbar-item" />
					</Link>
				</Tooltip>
				<Tooltip title="Watchlist">
					<Link to={`/products/watchlist`} productsType={"WATCHLIST"}>
						<VisibilityIcon className="Navbar-item" />
					</Link>
				</Tooltip>
				<Link to={`/register`} className="Navbar-Link">
					<p className="Navbar-item">{REGISTER}</p>
				</Link>
				{!localStorage.getItem("userId") &&
					<Link to={`/login`} className="Navbar-Link">
						<p className="Navbar-item">{SIGN_IN}</p>
					</Link>
				}
				<Tooltip title="Logout">
					<LogoutIcon
						className="Navbar-item"
						onClick={handleLogout}
						sx={{ color: 'black' }}
					/>
				</Tooltip>
			</div>
		</div>
	);
};