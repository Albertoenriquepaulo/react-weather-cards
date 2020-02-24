import React from 'react';
// import styled from '@emotion/styled';
import Logo from './img/weatherNavBar.png'
import { Link } from "react-router-dom";

import "./navBar.css";


//ICONS
import { FaHome, FaUser, FaAdn } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";


const NavBar = () => {

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
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <FaHome size="32px" data-toggle="tooltip" data-placement="bottom" title="Home" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">
                                <GoSignIn size="32px" data-toggle="tooltip" data-placement="bottom" title="Sign Up" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <FaUser size="32px" data-toggle="tooltip" data-placement="bottom" title="Sign In" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">
                                <FaAdn size="32px" data-toggle="tooltip" data-placement="bottom" title="Admin" />
                            </Link>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;