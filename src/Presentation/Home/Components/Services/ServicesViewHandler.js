import { useState } from "react";
import { useEffect } from "react";
import Services from "../../../../Data/Services";
import Service from "./Components/Service/Service";

const ServicesViewHandler = () => {

    const [views, setViews] = useState([]);

    useEffect(() => {
        const list = [];
        Services.map(({ src, title, data }) => list.push(<Service src={src} title={title} data={data} />));
        setViews(list);
    }, [])

    return {
        views
    }
};

export default ServicesViewHandler;