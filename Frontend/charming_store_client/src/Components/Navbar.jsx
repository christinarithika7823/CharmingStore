import "./Styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div id="nav">
			<div>
				<Link to={"/"}>
					<p id="log">Charming Store</p>
				</Link>
			</div>

			<div className="button">
				<Link to={"/cart"}>
					<button className="b">Cart</button>
				</Link>

				<Link to={"/signup"}>
					<button className="b">Sign Up</button>
				</Link>
				<Link to={"/signin"}>
					<button className="b">Sign In</button>
				</Link>
			</div>
		</div>
	);
};
