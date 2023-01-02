import "./LoggedOutUserHeader.scss";
import React, {useState} from "react";
import {useAtomValue, useSetAtom} from "jotai";
import {logoutAtom, userAtom} from "@Store/userStore";

const LoggedOutUserHeader: React.FC = () => {
    const setLogout = useSetAtom(logoutAtom);
    const [loading, setLoading] = useState<boolean>(false);
    const user = useAtomValue(userAtom);

    return (
        <div className="abc">

        </div>
    )
}

export default LoggedOutUserHeader;