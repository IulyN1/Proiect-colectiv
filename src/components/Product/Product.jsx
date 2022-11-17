import { useLocation } from 'react-router-dom';
import { Review } from '../Review/Review';
import './Product.css';
import Favorite from '../Favorite';
import {useEffect, useState} from "react";
import {getReviews} from "../../API";


export const Product = () => {
	const location = useLocation();
	const product = location.state;
	const [reviews, setReviews] = useState([]);
	useEffect( () => {
		(
			async() =>{
			let fetchItems= await getReviews(product?.id)
			setReviews(JSON.parse( await fetchItems.text()));
	})()
	},[product?.id])
	return (
		<div className="Product">
			<p>
				<span className="ProductFavoriteLabel">Favorite</span>
				<span className="ProductInteractionIcon">
					<Favorite product={product}/>
				</span>
			</p>
			<p>
				<span>Name: {product?.name}</span>
			</p>
			<p>
				<span>Price: {product?.price}</span>
			</p>
			<p>
				<span>Give a rating:</span>
				<span className="ProductInteractionIcon">
					<Review product={product} />
				</span>
			</p>
			<p>
				<span>Reviews</span>
				<ul className="ReviewList">
					{reviews.length > 0 ? (
						reviews.map((review) => <li key={review.id} > { review.text}</li>)
					) : (
						<p>{"No reviews yet"}</p>
					)}
				</ul>
			</p>
		</div>
	);
};
