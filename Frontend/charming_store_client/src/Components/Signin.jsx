import axios from "axios";
import "./Styles/Signin.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Signin = () => {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			username : e.target.UserName.value,
			password : e.target.Password.value
		};
		axios
			.post("https://charming-ecommerce.herokuapp.com/signin", payload)
			.then((res) => {
				console.log("Signin Successfull", res.data);
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<Navbar />
			<div id="signinbox">
				<h1>SIGN IN </h1>
				<form onSubmit={handleSubmit}>
					<div id="box12">
						<p id="ss1">Username: </p>
						<input type="text" id="ipbox12" name="UserName" placeholder="Enter UserName..." />
					</div>
					<br />
					<div className="bs1">
						<p id="ss2">Password: </p>
						<input type="text" className="ipbox123" name="Password" placeholder="Enter Password..." />
					</div>
					<br />
					<button id="signinsubmit" onSubmit={handleSubmit}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
