import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CarouselDecorator = ({ onVisible, view }) => {
    const [ref, inView] = useInView({ threshold: 0.9 });
    useEffect(() => {
        if (inView) onVisible();
    }, [inView]);
    return <div ref={ref} className="carouselDecorator" style={inView? {opacity: "1"} : {opacity: "0"}}>
        {view}
    </div>
}

export default CarouselDecorator;