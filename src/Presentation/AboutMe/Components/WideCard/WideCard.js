import WideCardViewHandler from "./WideCardViewHandler"
import "./WideCard.css";

const WildCard = ({ src, content, reverse }) => {

    const { ref, inView } = WideCardViewHandler();

    return <div ref={ref} className="card" style={reverse? {flexDirection: "row-reverse"} : {}}>
        <div style={inView ? { opacity: "1" } : { opacity: "0" }}> <img src={src} alt="sideImage"/> </div>
        <div style={{ flexShrink: "0", width: "100vw", ...(inView ? { width: "0vw" } : {}) }}></div>
        <div style={inView ? { opacity: "1" } : { opacity: "0" }}><span>{content}</span></div>
    </div>
}

export default WildCard;