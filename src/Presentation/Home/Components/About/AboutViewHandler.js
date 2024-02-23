import { useEffect } from "react";
import { useState } from "react";
import About from "../../../../Data/About";
import Section from "./Components/AboutSection/Section";

const AboutViewHandler = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const list = [];
        About.Description.map(({title, data}) => {
            list.push(<Section title={title} data={data} />);
        });
        setSections(list);
    },[])

    return {
        sections
    }
}

export default AboutViewHandler;