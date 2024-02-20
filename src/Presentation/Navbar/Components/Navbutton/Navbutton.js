const Navbutton = ({name, link, textStyle, style, underlineStyle}) => {
    return <div className="navbutton" style={style}>
        <div><a href={link} style={textStyle}> {name} </a></div>
        <div style={underlineStyle}/>
    </div>
};

export default Navbutton;

