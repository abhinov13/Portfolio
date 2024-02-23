import { useEffect, useRef } from "react";
import { useState } from "react";

const CarouselViewModel = (length) => {

    const [active, setActive] = useState(0);
    const carouselRef = useRef();

    function scroll(num) {
        carouselRef.current.scrollBy({ left: num, behavior: "smooth" })
    }

    function get() {
        return carouselRef.current.scrollLeft;
    }

    function width() {
        return carouselRef.current.clientWidth;
    }

    function scrollRight() {
        /*if (carouselRef.current.scrollLeft >= (length - 1) * carouselRef.current.clientWidth) carouselRef.current.scrollLeft = 0;
        else carouselRef.current.scrollLeft += 100;
        console.log(carouselRef.current.scrollLeft);*/
        if(get() >= (length-1) * width())
        {
            scroll(get()*(-1));
        }
        else
        {
            scroll(width());
        }
    }

    function scrollLeft() {
        /*console.log("second " + carouselRef.current.scrollLeft === 0);
        if(carouselRef.current.scrollLeft === 0) carouselRef.current.scrollLeft += length * carouselRef.current.clientWidth;
        else carouselRef.current.scrollLeft -= 100;
        console.log(carouselRef.current.scrollLeft);*/
        if(get() === 0)
        {
            scroll((length-1)*width());
        }
        else{
            scroll((-1)*width())
        }
    }

    return {
        active,
        setActive,
        carouselRef,
        scrollLeft,
        scrollRight
    }
}

export default CarouselViewModel;