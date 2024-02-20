import './App.css';
import AboutMe from './Presentation/AboutMe/AboutMe';
import Navbar from './Presentation/Navbar/Navbar';

function App() {

  return (
    <div className="App" style={{ background: "url(/background.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
