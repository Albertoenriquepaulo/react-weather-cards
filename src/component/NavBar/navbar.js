import React from 'react';
import styled from '@emotion/styled';
import Logo from './img/weatherNavBar.png'

const NavBar = () => {

    const NavigatorBar = styled.nav`
        background-image: linear-gradient(to right, blue, red);

    `

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary static-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="" width="150px" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"
                            >Home
                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;