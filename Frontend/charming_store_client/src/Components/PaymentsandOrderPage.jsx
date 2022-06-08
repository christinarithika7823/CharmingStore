import { Navbar } from "./Navbar";
import "./Styles/Payment.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const PaymentsandOrderPage = () => {
	const [
		values,
		setValues
	] = useState([]);

	const handlepay = () => {
		alert("Payment Successfull!! Your Order Will Be Delivered Soon...");
	};
	useEffect(() => {
		axios.get(`https://charming-ecommerce.herokuapp.com/getcheckout`).then((res) => {
			setValues([
				...res.data
			]);
		});
	}, []);
	return (
		<div>
			<Navbar />
			<h1 id="paytit">PAYMENTS PAGE </h1>

			<div id="pay">
				<div id="paydet">
					<h1 id="ptit"> PAYMENT DETAILS</h1>
					<p className="h2">Card : </p>
					<select name="pcard" id="pcard">
						<option value="Debit">Debit</option>
						<option value="Credit">Credit</option>
					</select>
					<p className="h2">Card Number: </p>
					<input type="number" className="pcards" placeholder="Enter Card Number" />
					<p className="h2">Name on Card: </p>
					<input type="text" className="pcards" placeholder="Enter Your Name" />
					<div id="dates">
						<div>
							<p className="h2">Expiry Month</p>
							<select id="dcard1">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
						</div>
						<div>
							<p className="h2">Expiry Year</p>
							<select id="dcard2">
								<option value="2022">2022</option>
								<option value="2023">2023</option>
								<option value="2024">2024</option>
								<option value="2025">2025</option>
								<option value="2026">2026</option>
								<option value="2027">2027</option>
								<option value="2028">2028</option>
								<option value="2029">2029</option>
							</select>
						</div>
					</div>
					<p className="h2">CVV: </p>
					<input type="number" placeholder="Enter CVV" id="cv" />

					<Link to={`/`}>
						<button id="paied" onClick={handlepay}>
							Pay Now
						</button>
					</Link>
				</div>
				<div id="ordersummary">
					<h1 id="otit">ORDER SUMMARY</h1>
					<p id="nt">NUMBER OF ITEMS:{values.length}</p>
					<div id="paytot">
						<p className="stot">SUB TOTAL :</p>
						<p className="stot">
							${values.reduce((acc, curr) => {
								return acc + +curr.price;
							}, 0)}
						</p>
					</div>
					<div id="paygst">
						<p className="ptot">TOTAL GST FOR THE PRODUCTS :</p>
						<p className="ptot">$200</p>
					</div>
					<div id="paytotal">
						<p className="ptot1">GRAND TOTAL :</p>
						<p className="ptot">
							{" "}
							${values.reduce((acc, curr) => {
								return acc + +curr.price;
							}, 0) + 200}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
