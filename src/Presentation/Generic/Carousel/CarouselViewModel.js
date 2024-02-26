import { useEffect, useRef } from "react";
import { useState } from "react";

const CarouselViewModel = (length) => {

    const [active, setActive] = useState(0);
    const carouselRef = useRef();
    const inter = useRef();

    useEffect(() => {
        inter.current = setInterval(scrollRight, 6000);
        return () => clearInterval(inter.current);
    })

    function resetInterval() {
        clearInterval(inter.current);
        inter.current = setInterval(scrollRight, 6000);
    }

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
        if (get() >= (length - 1) * width()) {
            scroll(get() * (-1));
        }
        else {
            scroll(width());
        }
        resetInterval();
    }

    function scrollLeft() {
        if (get() === 0) {
            scroll((length - 1) * width());
        }
        else {
            scroll((-1) * width())
        }
        resetInterval();
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