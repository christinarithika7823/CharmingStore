import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { CategoryPage } from "./Components/CategoryPage";
import { HomePage } from "./Components/HomePage";
import { CartPage } from "./Components/CartPage";
import { ProductPage } from "./Components/ProductPage";
import { Checkoutpage } from "./Components/Checkoutpage";
import { PaymentsandOrderPage } from "./Components/PaymentsandOrderPage";
import { Signup } from "./Components/Signup";
import { Signin } from "./Components/Signin";

export const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"/signup"} element={<Signup />} />
				<Route path={"/signin"} element={<Signin />} />
				<Route path={"/categories/:types"} element={<CategoryPage />} />
				<Route path={"/productpage/:id"} element={<ProductPage />} />
				<Route path={"/cart"} element={<CartPage />} />
				<Route path={"/checkoutpage"} element={<Checkoutpage />} />
				<Route path={"/productsandorderpage"} element={<PaymentsandOrderPage />} />
			</Routes>
		</div>
	);
};
