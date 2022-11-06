import React from "react";
import './Footer.css';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { BRAND, PRODUCTS_DESCRIPTION } from "../../constants";

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-left">
                <p>{PRODUCTS_DESCRIPTION}</p><br></br>
                <h3>Stay connected</h3>
                <FacebookIcon className="Icon facebook" />
                <InstagramIcon className="Icon instagram" />
                <PinterestIcon className="Icon pinterest" />
            </div>
            <div className="Footer-center"></div>
            <div className="Footer-right">
                <p>{BRAND}</p>
                <SelfImprovementIcon/><br></br><br></br><br></br>
                <p className="Footer-text">Copyright © 2022 {BRAND}. All Rights Reserved</p>
            </div>
        </div>
    )
};