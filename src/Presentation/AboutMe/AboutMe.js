import About from "../../Data/About";

const AboutMe = () => {
    return <div className="AboutMe">
        {About.Description.map((content) => (<p>{content}</p>))}
    </div>
}

export default AboutMe;