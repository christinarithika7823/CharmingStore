import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Styles/Checkout.css";
export const CheckoutDetails = ({ name, price, discount, image, rating, sizes, id, qty }) => {
	// const [
	// 	rate,
	// 	setRate
	// ] = useState(1);
	// const [
	// 	info,
	// 	setInfo
	// ] = useState([]);

	// useEffect(() => {
	// 	axios.get(`http://localhost:8000/getcheckout`).then((res) => {
	// 		setInfo([
	// 			...res.data
	// 		]);
	// 	});
	// }, []);
	const newQty = localStorage.getItem("newrate");
	// const handleCheckout = () => {
	// if (newQty > rate || newQty < rate) {
	// const payload = {
	// 	id         : id,
	// 	name       : name,
	// 	price      : rate * price,
	// 	discount   : discount,
	// 	image      : image,
	// 	categories : categories,
	// 	reviews    : reviews,
	// 	rating     : rating,
	// 	sizes      : sizes,
	// 	qty        : rate
	// };
	// axios.get(`http://localhost:8000/getcheckout`).then((res) => {
	// 	console.log(res.data);
	// localStorage.setItem("newrate", res.data.qty);
	// });
	// }
	// };

	// const handleChangeRate = (e) => {
	// 	setRate(e.target.value);
	// 	const payload = {
	// 		id         : id,
	// 		name       : name,
	// 		price      : rate * price,
	// 		discount   : discount,
	// 		image      : image,
	// 		categories : categories,
	// 		reviews    : reviews,
	// 		rating     : rating,
	// 		sizes      : sizes,
	// 		qty        : rate
	// 	};
	// 	axios.patch(`http://localhost:8080/checkout/${payload.id}`, payload).then((res) => {
	// 		console.log(res.data);
	// 		// localStorage.setItem("newrate", res.data.qty);
	// 	});
	// };

	return (
		<div id="prod">
			{/* <Link to={`/productpage/${id}`}> */}
			<div id="image">
				<img src={image} alt="" height={200} width={240} />
			</div>

			<div id="dets">
				<h3 id="names">{name}</h3>
				<div id="row">
					<p id="det">Price: ${price}</p>
					{/* <p id="det">Discount: {discount}</p> */}
				</div>
				{/* <p id="det">{categories}</p> */}
				{/* <div id="row1">
						<p id="det">Rating: {rating}</p> */}
				{/* <p id="det">{reviews} reviews</p> */}
				{/* </div> */}
				<p id="det1">Sizes Available: {sizes}</p>
			</div>
			{/* </Link> */}
			<div id="quantity">
				<p id="qt">Quantity: {qty} </p>
			</div>
		</div>
	);
};
