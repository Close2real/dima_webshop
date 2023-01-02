import React, {useCallback, useEffect, useState} from "react";
import "./header.scss";
import {useAtomValue, useSetAtom} from "jotai";
import {Link, NavLink} from "react-router-dom";
import Util from "@Utils/Util";
import {AppRoute, getMatchedRouteByPathname, ROUTES} from "@Config/appRoutes";
import {
    AiOutlineComment
} from "react-icons/ai";
import {logoutAtom, userAtom} from "@Store/userStore";
import LoggedUserHeader from "@Components/HeaderTypes/LoggedUserHeader";
import LoggedOutUserHeader from "@Components/HeaderTypes/LoggedOutUserHeader";
import Logo from "@AppAssets/img/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faCommentDots, faHouse, faAddressCard} from "@fortawesome/free-solid-svg-icons";


export interface AppNavLink {
    name: string;
    path: string;
    icon: JSX.Element;
    data: AppRoute;
}

const NAV_LINKS: Record<string, AppNavLink> = {
    CALLCENTER: {
        name: "Dashboard Callcenter",
        path: Util.generatePath({path: ROUTES.HOME}),
        icon: <AiOutlineComment/>,
        data: getMatchedRouteByPathname(ROUTES.HOME)
    }
};

const Header: React.FC = () => {

    const setLogout = useSetAtom(logoutAtom);
    const user = useAtomValue(userAtom);

    const [loading, setLoading] = useState<boolean>(false);

    // useGlobalLoader(loading);

    useEffect(() => {
        console.log(user);
    }, []);



    const renderNavigationLinks = useCallback((links: Record<string, AppNavLink>) => {

        return Object.entries(links).map(([key, {name, path, icon}]) => {
            return <li key={`nav_li_${key}`} className="app-nav__li">
                <NavLink to={path} className={"app-nav__link"}>
                    {icon}
                    <span className={"app-nav__link--label"} dangerouslySetInnerHTML={{__html: name}}/>
                </NavLink>
            </li>
        });
    }, []);

    return (
        <>
            <header className={'app-main-header'}>
                <div className="app-header flex">
                    <div className="app-header__infoblock">
                        <div className="app-header__infoblock__menu container">
                            <div className="app-header__infoblock__menu__left">
                                <div><FontAwesomeIcon icon={faHouse}/> Home</div>
                                <div><FontAwesomeIcon icon={faAddressCard}/> About us</div>
                            </div>
                            <div className="app-header__infoblock__menu__right">
                                <div><FontAwesomeIcon icon={faCommentDots}/> Contacts</div>
                            </div>
                        </div>
                        <div className="app-header__infoblock__information">
                            Infoblock information
                        </div>
                    </div>
                    <div className="app-header__main">
                        <div className="app-header__main__container">
                            <div className="app-header__main__logo">
                                <img src={Logo} alt="Logo"/>
                            </div>
                            <div className="app-header__main__search">
                                <input type="text" placeholder="Поиск..." className="app-header__main__search__input"/>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div className="app-header__main__user_block">
                                {
                                    user.logged &&
                                    <LoggedUserHeader/>
                                }
                                {
                                    !user.logged &&
                                    <LoggedOutUserHeader/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="app-header__categories container">
                        <div className="app-header__categories__container">
                            <div className="app-header__categories__container__item">
                                Категория
                            </div>
                            <div className="app-header__categories__container__item">
                                Категория
                            </div>
                            <div className="app-header__categories__container__item">
                                Категория
                            </div>
                            <div className="app-header__categories__container__item">
                                Категория
                            </div>
                            <div className="app-header__categories__container__item">
                                Категория
                            </div>
                            <div className="app-header__categories__container__item">
                                Категория
                            </div>
                            <div className="app-header__categories__container__item">
                                Категория
                            </div>
                            <div className="app-header__categories__container__item">
                                Категория
                            </div>
                        </div>
                    </div>


                </div>
            </header>
        </>
    );

};

export default Header;