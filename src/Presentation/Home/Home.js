import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import "./Home.css";

const Home = () => {
    return <div className="home">
        <About />
        <Services />
    </div>
}

export default Home;