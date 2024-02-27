import Table from "../../../Generic/Table/Table";
import "./Services.css";
import ServicesViewHandler from "./ServicesViewHandler";

const Services = () => {

    const { views } = ServicesViewHandler();

    return <div className="ServicesWrapper" style={{ background: "url(./serviceBackground.jpg)", backgroundSize: "cover" }}>
        <div className="Services">
            <div className="ServiceHeader">
                <h1>Services</h1>
                Crafting digital experiences one line of code at a time. Let's build something extraordinary together!
            </div>

            <div className="ServiceList">
                <Table views={views} />
            </div>

        </div>
    </div>
}

export default Services;