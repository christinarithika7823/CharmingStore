import axios from "axios";
import { useState, useEffect } from "react";
import "./Styles/Checkout.css";
import { Navbar } from "./Navbar";
import { CheckoutDetails } from "./CheckoutDetails";
import { Link } from "react-router-dom";

export const Checkoutpage = () => {
	const [
		info,
		setInfo
	] = useState([]);

	useEffect(() => {
		axios.get(`https://charming-ecommerce.herokuapp.com/getcheckout`).then((res) => {
			setInfo([
				...res.data
			]);
		});
	}, []);
	const rate = localStorage.getItem("rate");
	return (
		<div>
			<Navbar />
			<h1 id="checktit">CHECKOUT PAGE</h1>
			<h2 id="reviewtit">REVIEW PRODUCTS</h2>
			<div id="cards">
				<div id="smallcards">
					{info.map((e) => {
						return (
							<CheckoutDetails
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
								qty={e.qty}
							/>
						);
					})}
				</div>
				<div id="summary">
					<h1>ORDER SUMMARY</h1>
					<div>
						<p id="not">NUMBER OF ITEMS:{info.length}</p>
						<div id="checktot">
							<p className="stot">SUB TOTAL :</p>
							<p className="stot">
								{" "}
								${info.reduce((acc, curr) => {
									return acc + +curr.price;
								}, 0)}
							</p>
						</div>
						<div id="checkgst">
							<p className="stot">TOTAL GST FOR THE PRODUCTS :</p>
							<p className="stot">$200</p>
						</div>
						<div id="checktotal">
							<p className="stot1">GRAND TOTAL :</p>
							<p className="stot">
								{" "}
								${info.reduce((acc, curr) => {
									return acc + +curr.price;
								}, 0) + 200}
							</p>
						</div>
						<hr />
						<hr />
						<div id="address">
							<h1 id="add">SHIPPING ADDRESS </h1>
							<label>Country:</label>
							<br />
							<input type="text" placeholder="Enter Country name" />
							<br />
							<label>Full Name:</label>
							<br />
							<input type="text" placeholder="Enter Name" />
							<br />
							<label>Residential Address:</label>
							<br />
							<input type="text" placeholder="Enter Address" />
							<br />
							<label>City:</label>
							<br />
							<input type="text" placeholder="Enter City Name" />
							<br />
							<label>State: </label>
							<br />
							<input type="text" placeholder="Enter State Name" />
							<br />
							<label>Pin Code :</label>
							<br />
							<input type="text" placeholder="Enter Pin Code" />
							<br />
							<label>Phone Number: </label>
							<br />
							<input type="text" placeholder="Enter Phone Number" />
							<br />

							<Link to={`/productsandorderpage`}>
								<button id="payment">Continue To Payment</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
