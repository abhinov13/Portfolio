const Navbutton = ({name, link}) => {
    return <div className="navbutton">
        <a href={link} > {name} </a>
        <div />
    </div>
};

export default Navbutton;

