import "./About.css";
import Carousel from "../../../Generic/Carousel/Carousel";
import AboutViewHandler from "./AboutViewHandler";

const About = () => {

    const { sections } = AboutViewHandler();

    return <div className="about">
        <div className="aboutCarousel">
            <Carousel views={sections} />
        </div>
        <div className="aboutImg">
            <img src="./portraitSample.jpg" />
        </div>
    </div>
}

export default About;