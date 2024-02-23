import "./Section.css";

const Section = (props) => {
    return <div className="section">
        <span className="title">{props.title}</span> <br/>
        <span className="data">{props.data}</span>
    </div>
}

export default Section;