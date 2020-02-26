import React, { useContext } from 'react';
// import styled from '@emotion/styled';
import Logo from './img/weatherNavBar.png'
import { FaUserCheck } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./navBar.css";


//ICONS
import { FaHome, FaUser, FaAdn } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { UserContext } from '../UserContext';
import LogOut from "../logout";


const NavBar = () => {
    const { userName, setUserName } = useContext(UserContext)

    // const NavigatorBar = styled.nav`
    //     background-image: linear-gradient(to right, blue, red);

    // `

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top">
            <div className="container-fluid">
                <div className="navbar-brand">
                    {/* <img src={Logo} alt="" width="150px" /> */}
                    <h1>React Hook BBK Weather</h1>
                </div>
                {/* <div className="user-name text-right text-light" >
                        <p>{userName}</p>
                    </div> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <div className="collapse navbar-collapse row" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <FaHome size="32px" data-toggle="tooltip" data-placement="bottom" title="Home" /><p>Home</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">
                                    <GoSignIn size="32px" data-toggle="tooltip" data-placement="bottom" title="Sign Up" /><p>Sign up</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    <FaUser size="32px" data-toggle="tooltip" data-placement="bottom" title="Sign In" /><p>Log in</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link">
                                    <FaAdn size="32px" data-toggle="tooltip" data-placement="bottom" title="Admin" /><p>Admin</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="user-name row bg-primary text-white">
                        {userName ? <LogOut /> : null}
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default NavBar;