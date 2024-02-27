import "./Service.css";

const Service = ({ src, title, data }) => {
    return <div className="Service">
        <div className="Heading">
            <div className="ImageHolder">
                <img src={src} />
            </div>
            <div className="Title">
                {title}
            </div>
        </div>
        <div className="Description">
            {data}
        </div>
    </div>
};

export default Service;