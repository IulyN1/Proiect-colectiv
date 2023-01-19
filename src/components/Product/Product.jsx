import React from 'react';
import { useLocation } from 'react-router-dom';
import { Review } from '../Review/Review';
import './Product.css';
import Favorite from '../Favorite';
import { ReviewList } from '../ReviewList/ReviewList';
import { ProductAvgReview } from '../ProductAvgReview/ProductAvgReview';
import AddToWatchlist from '../AddToWatchlist/AddToWatchlist';
import { getImageForProduct, postShoppingCart } from '../../API';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Product = () => {
	const uid = localStorage.getItem('userId');
	const location = useLocation();
	const product = location.state.product;
	const [imageSrc, setImageSrc] = React.useState('');
	const [isDisabled, setIsDisabled] = React.useState(false);
	const [notInStockMessage, setNotInStockMessage] = React.useState('');

	React.useEffect(() => {
		(async () => {
			const response = await getImageForProduct(product?.id);
			const responseText = await response.text();
			setImageSrc(`data:image/png;base64,${responseText}`);
		})();

		if (product.nrInStock > 0) {
			setIsDisabled(false);
			setNotInStockMessage('');
		} else {
			setIsDisabled(true);
			setNotInStockMessage('Out of stock!');
		}
	}, [product]);

	const addToCart = () => {
		postShoppingCart(uid, product)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log('Cannot parse response!');
			});
	};

	const buttonSX = {
		borderColor: '#51d3ac',
		backgroundColor: '#51d3ac',
		display: 'flex',
		justifyContent: 'space-between',
		color: 'black',
		width: '150px',
		height: '40px',
		'&:hover': {
			backgroundColor: '#26e9ae',
			borderColor: '#26e9ae'
		},
		'&:disabled': {
			backgroundColor: '#909596',
			borderColor: '#909596'
		}
	};

	return (
		<div className="Product">
			<h3>
				<span>{product?.name}</span>
			</h3>
			<div className="ProductDetails">
				<img className="Product-Image" src={imageSrc} alt={product?.name} />
				<div>
					<p>
						<span>
							<b>Price:</b> {product?.price + ' RON'}
						</span>
					</p>
					<Button sx={buttonSX} onClick={() => addToCart()} disabled={isDisabled}>
						ADD TO CART <AddShoppingCartIcon />
					</Button>
					{notInStockMessage ? <span>{notInStockMessage}</span> : null}
					<AddToWatchlist product={product} />
					<p className="Rounded">
						<span className="ProductFavoriteLabel">Favorite</span>
						<span className="ProductInteractionIcon">
							<Favorite product={product} />
						</span>
					</p>{' '}
					<br></br>
					<Review product={product} />
					<ReviewList product={product} />
					<ProductAvgReview product={product} />
				</div>
			</div>
		</div>
	);
};
