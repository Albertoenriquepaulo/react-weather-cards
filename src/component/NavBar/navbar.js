import React from 'react';
// import styled from '@emotion/styled';
import Logo from './img/weatherNavBar.png'
import { Link } from "react-router-dom";


const NavBar = () => {

    // const NavigatorBar = styled.nav`
    //     background-image: linear-gradient(to right, blue, red);

    // `

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top">
            <div className="container">
                <div className="navbar-brand">
                    <img src={Logo} alt="" width="150px" />
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
                        <li className="nav-item active">
                            <Link to="/" className="nav-link"
                            >Home
                    {/* <span className="sr-only"></span> */}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
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