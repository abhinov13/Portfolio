import { useState } from "react";

const MenuViewModel = () => {

    const [isOpen, setOpen] = useState(false);

    const options = [
        "Home",
        "About Me",
        "Experience",
        "Projects",
        "Resume",
        "Contact"
    ];

    const links = [
        {src: "/github.svg", link: ""},
        {src: "/leetcode.svg", link: ""},
        {src: "/linkedin.svg", link: ""},
        {src: "/gmail.svg", link: ""},
    ]

    function close(){
        console.log("setting false");
        setOpen(false);
    }

    function open(){
        console.log("setting true");
        setOpen(true);
    }

    return {
        options,
        links,
        close,
        open,
        isOpen
    }
}

export default MenuViewModel;