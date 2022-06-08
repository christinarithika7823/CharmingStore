import axios from "axios";
import { useState, useEffect } from "react";
import "./Styles/Category.css";
import { Navbar } from "./Navbar";
import { CartDetails } from "./CartDetails";
import { Link } from "react-router-dom";

export const CartPage = () => {
	const [
		info,
		setInfo
	] = useState([]);

	useEffect(() => {
		axios.get(`https://charming-ecommerce.herokuapp.com/getcart`).then((res) => {
			setInfo([
				...res.data
			]);
		});
	}, []);

	return (
		<div>
			<Navbar />
			<h1 id="carttit">CART PAGE</h1>
			<div id="ctit">
				<p id="total">
					TOTAL : ${info.reduce((acc, curr) => {
						return acc + +curr.price;
					}, 0)}
				</p>
				<Link to={`/checkoutpage`}>
					<button id="check">Continue To CheckOut</button>
				</Link>
			</div>
			<div id="cat_cards">
				<div className="allcards">
					{info.map((e) => {
						return (
							<CartDetails
								key={e._id}
								id={e._id}
								name={e.name}
								price={e.price}
								discount={e.discount}
								image={e.image}
								categories={e.categories}
								reviews={e.reviews}
								rating={e.rating}
								sizes={e.sizes}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
