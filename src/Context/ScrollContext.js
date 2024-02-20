import { createContext, useContext, useState } from "react"

const context = createContext();

export const ScrollContext = ({ children }) => {

    const [percent, setPercent] = useState(0);

    function updateScroll(percent) {
        setPercent(percent);
    }

    const value = {
        updateScroll,
        percent
    }

    return <context.Provider value={value}>
        {children}
    </context.Provider>
}

function useScroll() {
    return useContext(context);
}

export default useScroll;