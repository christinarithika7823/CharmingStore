import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/HomePage.css";

export const CartDetails = ({ name, price, discount, image, categories, reviews, rating, sizes, id }) => {
	const [
		rate,
		setRate
	] = useState(1);
	const newQty = localStorage.getItem("newrate");
	const handleCheckout = () => {
		// alert("Added To Cart!");
		if (newQty > rate || newQty < rate) {
			const payload = {
				id         : id,
				name       : name,
				price      : rate * price,
				discount   : discount,
				image      : image,
				categories : categories,
				reviews    : reviews,
				rating     : rating,
				sizes      : sizes,
				qty        : rate
			};
			axios
				.put(`https://charming-ecommerce.herokuapp.com/getcheckoutproduct/${payload.id}`, payload)
				.then((res) => {
					console.log(res.data);
					// localStorage.setItem("newrate", res.data.qty);
				});
		}
		else {
			const payload = {
				id         : id,
				name       : name,
				price      : rate * price,
				discount   : discount,
				image      : image,
				categories : categories,
				reviews    : reviews,
				rating     : rating,
				sizes      : sizes,
				qty        : rate
			};
			axios.post(`https://charming-ecommerce.herokuapp.com/postcheckout`, payload).then((res) => {
				console.log(res.data);
				localStorage.setItem("newrate", res.data.qty);
			});
		}
	};
	// useEffect(() => {

	// }, []);

	const handleChangeRate = (e) => {
		setRate(e.target.value);
	};

	return (
		<div className="proddet">
			{/* <Link to={`/productpage/${id}`}> */}
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
			{/* </Link> */}
			<div id="qty">
				<p id="qt">Quantity: </p>
				<select name="qty" id="qty" onChange={handleChangeRate}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
				</select>
				<button id="addcheckout" onClick={handleCheckout}>
					Add To Checkout
				</button>
			</div>
		</div>
	);
};
