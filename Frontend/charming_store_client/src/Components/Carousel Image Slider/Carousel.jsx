import { useState, useEffect } from "react";
import "./Carousel.css";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
	const slides = [
		"https://s3.envato.com/files/201875733/BEE-1631-Fashion%20Sale%20Banners_01_Preview4.jpg",
		"https://img.freepik.com/free-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg?w=1380",
		"https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_men_s_clothing_banner_template_20_1200x628.jpg",
		"https://i.pinimg.com/originals/bc/36/85/bc3685a9d258d94c46ede838b118d96c.jpg",
		"https://i.pinimg.com/736x/66/d6/d3/66d6d3818b2dce1ee0ade72a94d4da8f.jpg",
		"https://www.sliderrevolution.com/wp-content/uploads/2020/04/big-summer.jpg",
		"https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fed81142f212_json_image_1609400596.webp"
	];
	const [
		currentSlide,
		setCurrentSlide
	] = useState(0);

	useEffect(() => {
		const slideInterval = setInterval(() => {
			setCurrentSlide((currentSlide) => (currentSlide < slides.length - 1 ? currentSlide + 1 : 0));
		}, 3000);
		return () => clearInterval(slideInterval);
	}, []);

	return (
		<div className="Container">
			<div className="carousel">
				<div className="carousel-inner" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
					{slides.map((slide, index) => <CarouselItem slide={slide} key={index} />)}
				</div>
				{/* <CarouselControls /> */}
			</div>
		</div>
	);
};
