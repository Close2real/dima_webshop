import React, {useEffect} from "react";
import {useLocation} from "react-router";

const ScrollRestoration: React.FC = ({children}) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>
};

export default ScrollRestoration;