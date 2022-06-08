import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getindividualproducts } from "../Redux/action";
import { IndividualProductDetails } from "./IndividualProductDetails";
import { Navbar } from "./Navbar";

export const ProductPage = () => {
	// const [
	// 	datas,
	// 	setDatas
	// ] = useState([]);

	const dispatch = useDispatch();
	const getindividualvalues = useSelector((store) => store.getIndividualProductsReducer.getindividualproducts);
	const { id } = useParams();
	useEffect(
		() => {
			getdatas();
		},
		[
			id
		]
	);
	const getdatas = () => {
		axios.get(`https://charming-ecommerce.herokuapp.com/getproductsone/${id}`).then((res) => {
			// setDatas([
			// 	res.data
			// ]);
			dispatch(
				getindividualproducts([
					res.data
				])
			);
			// console.log(res);
		});
	};
	// console.log(datas);
	return (
		<div>
			<Navbar />
			<div>
				{getindividualvalues.map((e) => {
					return (
						<IndividualProductDetails
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
							description={e.description}
						/>
					);
				})}
			</div>
		</div>
	);
};
