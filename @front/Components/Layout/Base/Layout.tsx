import React, {useEffect, useRef, useState} from "react";
import {Outlet, useLocation, useParams} from 'react-router-dom';
import 'simplebar/dist/simplebar.min.css';
import "./layout.scss";
import Header from "@Components/Layout/Header/Header";
import Footer from "@Components/Layout/Footer/Footer";
import {getMatchedRouteByLocation, LayoutProps} from "@Config/appRoutes";

const Layout: React.FC = () => {

    const location = useLocation();
    const params = useParams();

    const [canRender, setCanRender] = useState<boolean>(false);
    const [sideOpen, setSideOpen] = useState<boolean>(true);
    const scrollableNodeRef = useRef<any>();

    const [layoutProps, setLayoutProps] = useState<LayoutProps>({
        showHeaderMenu: true,
    });

    useEffect(() => {

        const matchedRoute = getMatchedRouteByLocation(location, params);

        const matchedRouteLayoutProps = matchedRoute ? {...matchedRoute.layoutProps} : {};

        setLayoutProps({
            ...layoutProps,
            ...matchedRouteLayoutProps
        });

        scrollableNodeRef.current?.scroll({
            top: 0,
            behavior: "smooth"
        });

        setCanRender(true);

    }, [location.pathname]);

    if (!canRender) {
        return null;
    }

    return (
        <div className={`layout path-${location.pathname}`}>
            <Header/>
            <main className={`layout__main ${sideOpen ? '' : 'layout__main__side-closed'}`}>
                <div className="contain">
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
    )
};

export default Layout;
