import axios from "axios";
import "./Styles/Signup.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Signup = () => {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			username : e.target.UserName.value,
			email    : e.target.Email.value,
			phone    : e.target.Phone.value,
			password : e.target.Password.value
		};

		axios
			.post("https://charmingstore.onrender.com/signup", payload)
			.then((res) => {
				console.log("Signup Successfull", res.data);
				navigate("/signin");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<Navbar />
			<div id="signupbox">
				<h1>SIGN UP </h1>
				<form onSubmit={handleSubmit}>
					<div id="box1">
						<p id="bb1">Username : </p>
						<input type="text" id="ipbox1" name="UserName" placeholder="Enter username" />
					</div>
					<br />
					<div className="b1">
						<p id="bb2">Email : </p>
						<input type="text" className="ipbox" name="Email" placeholder="Enter Email" />
					</div>
					<br />
					<div className="b1">
						<p id="bb3">Phone Number: </p>
						<input type="number" className="ipbox" name="Phone" placeholder="Enter phone number" />
					</div>
					<br />
					<div className="b1">
						<p id="bb4">Password : </p>
						<input type="text" className="ipbox" name="Password" placeholder="Enter password" />
					</div>
					<br />

					<button id="signupsubmit" onSubmit={handleSubmit}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
