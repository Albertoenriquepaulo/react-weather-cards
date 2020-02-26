
import React, { useState, useContext } from 'react';
import { FaUserCheck } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

import { UserContext } from "../component/UserContext";

const LogOut = () => {
    let history = useHistory();
    const { userName, setUserName } = useContext(UserContext);
    console.log("LOG-OUT->", userName);

    const myFunction = (e) => {
        e.preventDefault();
        setUserName(null);
        history.push("/home");
    }

    return (
        <>
            <FaUserCheck size="20px" />
            <p><strong>{userName}</strong></p>
            <a onClick={(e) => {
                myFunction(e)
            }
            }>Log out</a>
        </>

    );
}

export default LogOut;