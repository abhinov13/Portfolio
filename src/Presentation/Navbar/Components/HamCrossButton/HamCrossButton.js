import AnimationHamCross from "./AnimationHamCross";
import './HamCross.css';

const HamCrossButton = ({lineStyle, parentStyle, crossStyle, crossParentStyle, isOpen, setOpen}) => {

    const {
        changeMode
    } = AnimationHamCross(isOpen, setOpen);

    return <div className={`base ${isOpen ? "open" : ""}`} style={{...parentStyle, ...(isOpen ? crossParentStyle: {})}} onClick={() => changeMode()}>
        <div style={{...lineStyle, ...(isOpen ? crossStyle: {})}} />
        <div style={lineStyle} />
        <div style={{...lineStyle, ...(isOpen ? crossStyle: {})}} />
    </div>
}

export default HamCrossButton;