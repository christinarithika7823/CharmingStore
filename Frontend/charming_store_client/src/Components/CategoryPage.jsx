import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./Styles/Category.css";
import { useDispatch, useSelector } from "react-redux";
import { getcategoryproducts } from "../Redux/action";
import { ProductDetails } from "./ProductDetails";
import { Navbar } from "./Navbar";

export const CategoryPage = () => {
	// const [
	// 	category,
	// 	setCategory
	// ] = useState([]);
	const dispatch = useDispatch();
	const getcatvalues = useSelector((store) => store.getCategoryReducer.getcatproduct);
	const { types } = useParams();

	useEffect(
		() => {
			getcatdatas();
		},
		[
			types
		]
	);

	const getcatdatas = () => {
		axios.get(`https://charming-ecommerce.herokuapp.com/getproducts`).then((res) => {
			const data = res.data.filter((el) => {
				return el.categories === types;
			});
			// setCategory([
			// 	...data
			// ]);
			dispatch(
				getcategoryproducts([
					...data
				])
			);
		});
	};
	// http://localhost:8080/products?_sort=discount&_order=asc
	const getSortedData = (type, order) => {
		axios.get(`https://charming-ecommerce.herokuapp.com/getproducts?_sort=${type}&_order=${order}`).then((res) => {
			const data = res.data.filter((el) => {
				return el.categories === types;
			});
			// setCategory([
			// 	...data
			// ]);
			dispatch(
				getcategoryproducts([
					...data
				])
			);
		});
	};

	return (
		<div>
			<Navbar />
			{getcatvalues.map((el) => {
				<h1>{el.categories}</h1>;
			})}
			<div id="cat_cards">
				<button onClick={() => getSortedData("price", "asc")}>ASC</button>
				<button onClick={() => getSortedData("price", "desc")}>DESC</button>

				<div className="allcards">
					{getcatvalues.map((e) => {
						return (
							<ProductDetails
								key={e._id}
								id={e._id}
								name={e.name}
								price={e.price}
								discount={e.discount}
								image={e.image}
								// categories={e.categories}
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
