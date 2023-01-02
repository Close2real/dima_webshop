import "./LoggedUserHeader.scss";
import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import Util from "@Utils/Util";
import {ROUTES} from "@Config/appRoutes";
import {logoutAtom, userAtom} from "@Store/userStore";
import {useAtomValue, useSetAtom} from "jotai";

const LoggedUserHeader: React.FC = () => {
    const setLogout = useSetAtom(logoutAtom);
    const [loading, setLoading] = useState<boolean>(false);
    const user = useAtomValue(userAtom);

    const logoutAction = useCallback(

        async () => {
            try {
                setLoading(true);
                await setLogout();
            } catch (ex) {
                console.log("logout error", ex)
            } finally {
                Util.redirect(Util.generatePath({
                    path: ROUTES.LOGIN
                }));
            }

        },
        [setLogout]
    );

    return (
        <div>
            <Link to={Util.generatePath({path: ROUTES.HISTORY})}
                  className={"app_header_right__link"}>
                History
            </Link>
            <span className="app_header_right__points">Instant Win Points: {user.points}</span>
            <button className={'app_header_right__logout'} onClick={logoutAction}>
                Logout
            </button>
        </div>
    )
}

export default LoggedUserHeader;