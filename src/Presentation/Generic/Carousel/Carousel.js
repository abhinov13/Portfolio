import "./Carousel.css";
import CarouselViewModel from "./CarouselViewModel";
import CarouselDecorator from "./ViewDecorator/CarouselDecorator";

const Carousel = ({ views }) => {

    const { active,
        setActive,
        carouselRef,
        scrollLeft,
        scrollRight } = CarouselViewModel(views.length);

    return <div className="carouselWrapper">
        <div className="carousel" ref={carouselRef}>
            {views.map((view, index) => <CarouselDecorator view={view} onVisible={() => { setActive(index) }} />)}
        </div>

        <div className="arrows">
            <div className="arrow" onClick={scrollLeft}><img src="arrow.svg" style={{ rotate: "-90deg" }} /></div>
            <div className="dots">
                {
                    //i need several dots that will be gray or white depending on which view is active
                    //on clicking on a dot i would like to move to that specific slide
                    views.map((view, index) =>
                        <span style={index === active ? { color: "white" } : { color: "red" }}>
                            .
                        </span>)
                }
            </div>
            <div className="arrow" onClick={() => scrollRight()}><img src="arrow.svg" style={{ rotate: "90deg" }} /></div>
        </div>
    </div>
}

export default Carousel;