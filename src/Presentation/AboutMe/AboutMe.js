import About from "../../Data/About";
import WideCard from "./Components/WideCard/WideCard";

const AboutMe = () => {

    return <div className="AboutMe">
        {About.Description.map((content, index) => <WideCard src={'./sampleImage.jpg'} content={content} reverse={index % 2 === 0} />)}
    </div>
}

export default AboutMe;