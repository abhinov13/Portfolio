import Navbutton from "./Components/Navbutton/Navbutton";

const Navbar = () => {
    return <div className="navbar">
        <div> <img src="/logo.svg" style={{ height: "100%" }} alt="logo" /> </div>
        <div style={{ flexGrow: "1" }} />
        <div style={style.navbutton} ><Navbutton name="About" link="/" /></div>
        <div style={style.navbutton} ><Navbutton name="Project" link="/" /></div>
        <div style={style.navbutton} ><Navbutton name="Contact" link="/" /></div>
    </div>
}

const style = {
    navbutton: {
        width: "10%",
        display: "flex",
        justifyContent: "center",
    }
}

export default Navbar;