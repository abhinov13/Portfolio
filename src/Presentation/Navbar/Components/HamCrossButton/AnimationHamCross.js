import { useEffect, useState } from "react";

const AnimationHamCross = (whenHam, whenCross) => {

    const [mode,setMode] = useState("ham");
    useEffect(() => {
        whenHam();
    }, [whenHam])
    function changeToHam()
    {
        whenHam();
        setMode("ham");
    }

    function changeToCross()
    {
        whenCross();
        setMode("cross");
    }

    function changeMode()
    {
        if(mode === "ham")
        {
            changeToCross();
        }
        else{
            changeToHam();
        }
    }
    return {
        mode,
        changeMode
    }
}

export default AnimationHamCross;