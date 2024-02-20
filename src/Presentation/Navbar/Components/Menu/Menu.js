import HamCrossButton from "../HamCrossButton/HamCrossButton";
import Navbutton from "../Navbutton/Navbutton";
import "./Menu.css";
import MenuViewModel from "./MenuViewModel";

const Menu = () => {

    const {
        options,
        links,
        close,
        open,
        isOpen
    } = MenuViewModel();

    return <div className={`Menu${isOpen? "": " close"}`}>
        <div className="ToggleButton" >
            <HamCrossButton lineStyle={{ backgroundColor: "white" }} whenHam={() => close()} whenCross={() => open()} crossStyle={{backgroundColor: "black"}} />
        </div>
        <div className="Options">
            {options.map((section) => (<div><Navbutton name={section} underlineStyle={{ backgroundColor: "black" }} textStyle={{ color: "black" }} /></div>))}

        </div>
        <div className="links">
            {links.map(({ src, link }) => (<a href={link} ><img src={src} alt="link" /></a>))}
        </div>
    </div>
}


export default Menu;