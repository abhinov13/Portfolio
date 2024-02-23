import { useEffect, useState } from "react";

const AnimationHamCross = (isOpen, setOpen) => {

    function changeToHam()
    {
        setOpen(false);
    }

    function changeToCross()
    {
        setOpen(true);
    }

    function changeMode()
    {
        if(!isOpen)
        {
            changeToCross();
        }
        else{
            changeToHam();
        }
    }
    return {
        changeMode
    }
}

export default AnimationHamCross;