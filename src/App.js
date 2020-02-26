//https://home.openweathermap.org
//https://home.openweathermap.org/users/sign_up
//User: React-ap-2020

import React from 'react';
import { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import WeatherEngine from "./component/WeatherEngine";
import NavBar from "./component/NavBar/navbar";
import FooterBootStrap from "./component/footer";
import { Button } from 'reactstrap';
import { UserContext } from "./component/UserContext";

//Pages to Route
import SignUp from "./component/pages/signup";
import Login from "./component/pages/login";
import Admin from "./component/pages/admin";
import Home from "./component/pages/home";
import UserConfig from "../src/component/pages/user-config";
import UserDesktop from "../src/component/pages/user-desktop";

import UsuarioConfig from "../src/component/countryList/user-config";

// import MyRouter from "./component/router";

const App = () => {
  const [userName, setUserName] = useState(null);
  const value = useMemo(() => ({ userName, setUserName }), [userName, setUserName]);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={value}>
          <NavBar />
        </UserContext.Provider>
        <div>
          <Switch>
            <UserContext.Provider value={value}>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/user-desktop:userName" component={UserDesktop} />
              <Route path="/user-config:userName" component={UserConfig} />
              <Route path="/usuario-config" component={UsuarioConfig} />
            </UserContext.Provider>
          </Switch>
        </div>
        <div className="myClass">
          <FooterBootStrap />
        </div >
      </div>

    </Router>
  );
}

export default App;
