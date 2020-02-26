
import React, { useContext } from 'react';
import { FaUserCheck } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

import { UserContext } from "../component/UserContext";

const LogOut = () => {
    let history = useHistory();
    const { userName, setUserName } = useContext(UserContext);

    const myFunction = (e) => {
        e.preventDefault();
        setUserName(null);
        history.push("/");
    }

    return (
        <>
            <FaUserCheck size="20px" />
            <p><strong>{userName}</strong></p>
            <button type="button" className="btn btn-link mybtn-link" onClick={(e) => {
                myFunction(e)
            }
            }>Log out</button>
        </>

    );
}

export default LogOut;