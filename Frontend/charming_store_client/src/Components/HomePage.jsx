import axios from "axios";
import { useEffect } from "react";
// import { useState } from "react";
import "./Styles/HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetails } from "./ProductDetails";
import { getproducts } from "../Redux/action";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel Image Slider/Carousel";
import { Link } from "react-router-dom";

export const HomePage = () => {
	// const [
	// 	prod,
	// 	setProd
	// ] = useState([]);
	const dispatch = useDispatch();
	const getvalues = useSelector((store) => store.getProdReducer.getproduct);

	useEffect(() => {
		getdatas();
	}, []);

	const getdatas = () => {
		axios.get(`https://charming-ecommerce.herokuapp.com/getproducts`).then((res) => {
			console.log(res);
			// setProd([
			// 	...res.data
			// ]);
			dispatch(
				getproducts([
					...res.data
				])
			);
		});
	};

	return (
		<div>
			<Navbar />
			<div id="carousel">
				<Carousel />
			</div>

			<h1>CATEGORIES</h1>
			<div id="category">
				<Link to={"/categories/menswear"} style={{ textDecoration: "none", color: "inherit" }}>
					<div className="cat1">
						<img
							className="cat_img"
							src="https://rukminim1.flixcart.com/image/832/832/kzn17680/t-shirt/y/w/b/m-bblrn-z31-blive-original-imagbhywajhzhphz.jpeg?q=70"
							alt=""
						/>
						<p className="cat_tit">Mens Wear</p>
					</div>
				</Link>
				<Link to={"/categories/womensethnic"} style={{ textDecoration: "none", color: "inherit" }}>
					<div className="cat">
						<img
							className="cat_img"
							src="https://rukminim1.flixcart.com/image/832/832/k62i5jk0/sari/p/n/g/free-rustom-blue-kg-s-drm-original-imafh4yh4mshkq3g.jpeg?q=70"
							alt=""
						/>
						<p className="cat_tit">Women's Ethnic</p>
					</div>
				</Link>
				<Link to={"/categories/womenswestern"} style={{ textDecoration: "none", color: "inherit" }}>
					<div className="cat">
						<img
							className="cat_img"
							src="https://i.pinimg.com/originals/74/b8/fa/74b8faafe85a329603fbbe9026a1009e.jpg"
							alt=""
						/>
						<p className="cat_tit">Women's Western</p>
					</div>
				</Link>
				<Link to={"/categories/mensfootwear"} style={{ textDecoration: "none", color: "inherit" }}>
					<div className="cat">
						<img
							className="cat_img"
							src="https://5.imimg.com/data5/FK/RI/MY-23146560/mens-sports-shoes-b-12-250x250.jpg"
							alt=""
						/>
						<p className="cat_tit">Mens FootWear</p>
					</div>
				</Link>
				<Link to={"/categories/womensfootwear"} style={{ textDecoration: "none", color: "inherit" }}>
					<div className="cat">
						<img
							className="cat_img"
							src="https://rukminim2.flixcart.com/image/300/300/ktketu80/sandal/o/z/z/4-phs-601-4-shankhian-black-original-imag6v32hmczsht8.jpeg?q=90"
							alt=""
						/>
						<p className="cat_tit">Womens FootWear</p>
					</div>
				</Link>
			</div>

			<div id="Container">
				<div id="container1">
					{getvalues.map((e) => {
						return (
							<ProductDetails
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
