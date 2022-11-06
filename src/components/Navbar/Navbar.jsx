import React from 'react';
import './Navbar.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BRAND, REGISTER, SIGN_IN } from '../../constants';

export const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="Navbar-left"></div>
			<div className="Navbar-center">
				<p>{BRAND}</p>
				<SelfImprovementIcon className="Icon" />
			</div>
			<div className="Navbar-right">
				<FavoriteBorderIcon className="Navbar-item" />
				<p className="Navbar-item">{REGISTER}</p>
				<p className="Navbar-item">{SIGN_IN}</p>
			</div>
		</div>
	);
};
