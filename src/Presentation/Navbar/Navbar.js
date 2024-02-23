//import Navbutton from "./Components/Navbutton/Navbutton";
import NavbarViewHandler from "./NavbarViewHandler";
import "./Navbar.css";
//import HamCrossButton from "./Components/HamCrossButton/HamCrossButton";
import Menu from "./Components/Menu/Menu";

const Navbar = () => {

    const {
        titleRef
    } = NavbarViewHandler();

    return <div className="navbar">
        <div ref={titleRef} style={{ fontSize: "xx-large" }}> am<span style={{ color: "#c23616" }}>.</span> </div>
        <div style={{ flexGrow: "1" }} />
        <Menu />
        {/*        <div style={style.navbutton} ><Navbutton name="About" link="/" /></div>
        <div style={style.navbutton} ><Navbutton name="Project" link="/" /></div>
        <div style={style.navbutton} ><Navbutton name="Contact" link="/" /></div>*/}
    </div>
}

/*const style = {
    navbutton: {
        width: "10%",
        display: "flex",
        justifyContent: "center",
    }
}*/

export default Navbar;