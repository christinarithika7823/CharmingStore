import "./Carousel.css";

export const CarouselItem = ({ slide }) => {
	return (
		<div className="carousel-item">
			<img className="img" src={slide} />
		</div>
	);
};
