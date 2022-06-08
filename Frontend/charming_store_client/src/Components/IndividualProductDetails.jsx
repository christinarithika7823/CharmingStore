import "./Styles/Product.css";
import axios from "axios";

export const IndividualProductDetails = ({
	name,
	price,
	discount,
	image,
	categories,
	reviews,
	rating,
	sizes,
	id,
	description
}) => {
	const handleCart = () => {
		alert("Added To Cart!");
		const payload = {
			id         : id,
			name       : name,
			price      : price,
			discount   : discount,
			image      : image,
			categories : categories,
			reviews    : reviews,
			rating     : rating,
			sizes      : sizes
		};
		axios.post("https://charming-ecommerce.herokuapp.com/postcart", payload).then((res) => {
			console.log(res.data);
		});
	};
	return (
		<div>
			<div id="details">
				<div id="im">
					<img src={image} alt="" height={500} width={550} />
				</div>
				<div id="detailed">
					<h1 id="name">{name}</h1>
					<div id="val">
						<p id="price">Price : ${price}</p>
						<p id="dis">Discount: {discount}</p>
					</div>

					<p id="des">DESCRIPTION: </p>
					<br />
					<p id="det">{description}</p>
					<div id="rate">
						<p>Rating : {rating}</p>
						<p id="rat">{reviews} Reviews</p>
					</div>
					<p id="size">Sizes Available: {sizes}</p>
					<button id="cart" onClick={handleCart}>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};
