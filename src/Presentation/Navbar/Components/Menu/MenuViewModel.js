import { useEffect, useState } from "react";

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

    useEffect(() => {console.log("Updated value " + isOpen)} , [isOpen])

    return {
        options,
        links,
        setOpen,
        isOpen
    }
}

export default MenuViewModel;