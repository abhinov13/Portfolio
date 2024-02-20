import AnimationHamCross from "./AnimationHamCross";
import './HamCross.css';

const HamCrossButton = ({lineStyle, parentStyle, whenHam, whenCross, crossStyle, crossParentStyle}) => {

    const {
        mode,
        changeMode
    } = AnimationHamCross(whenHam, whenCross);

    return <div className={`base ${mode === "cross" ? "open" : ""}`} style={{...parentStyle, ...(mode==="cross"? crossParentStyle: {})}} onClick={() => changeMode()}>
        <div style={{...lineStyle, ...(mode==="cross"? crossStyle: {})}} />
        <div style={lineStyle} />
        <div style={{...lineStyle, ...(mode==="cross"? crossStyle: {})}} />
    </div>
}

export default HamCrossButton;