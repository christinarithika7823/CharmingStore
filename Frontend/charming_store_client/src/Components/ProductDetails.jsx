import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/HomePage.css";

export const ProductDetails = ({ name, price, discount, image, categories, reviews, rating, sizes, id }) => {
	const [
		rate,
		setRate
	] = useState(1);
	const handleCart = () => {
		const payload = {
			name       : name,
			price      : price,
			discount   : discount,
			image      : image,
			categories : categories,
			reviews    : reviews,
			rating     : rating,
			sizes      : sizes
		};
		console.log(payload, "oojdfhkj");
		axios.post("https://charming-ecommerce.herokuapp.com/postcart", payload).then((res) => {
			console.log(res.data);
		});
	};

	// const handleclick = (e) => {
	// 	setRate(e.target.value);
	// };

	return (
		<div className="proddet">
			<Link to={`/productpage/${id}`}>
				<div id="imag">
					<img src={image} alt="" height={300} width={300} />
				</div>

				<div id="card">
					<h3 className="names">{name}</h3>
					<div className="row">
						<p className="det">Price: ${rate * price}</p>
						<p className="det">Discount: {discount}</p>
					</div>
					{/* <p className="det">{categories}</p> */}
					<div className="row1">
						<p className="det">Rating: {rating}</p>
						{/* <p className="det">{reviews} reviews</p> */}
					</div>
					<p className="det1">Sizes Available: {sizes}</p>
				</div>
			</Link>
			<button id="addcart" onClick={handleCart}>
				Add To Cart
			</button>
		</div>
	);
};
