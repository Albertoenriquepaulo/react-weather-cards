//https://home.openweathermap.org
//https://home.openweathermap.org/users/sign_up
//User: React-ap-2020

import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import WeatherEngine from "./component/WeatherEngine";
import NavBar from "./component/NavBar/navbar";

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
  const [numbersCardToPrint, setNumbersCardToPrint] = useState(0);

  const doWhenOnkeyDownEqualEnter = (params) => {
    if (params.keyCode === 13) {
      setNumbersCardToPrint(params.target.value);
    }
  }

  const createHTML = (value) => {
    let weatherInnerHTML = [];
    for (let index = 0; index < value; index++) {
      weatherInnerHTML.push(<WeatherEngine initialLocation="Venezuela" />)
    }
    return weatherInnerHTML;
  }

  // function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/user-desktop" component={UserDesktop} />
            <Route path="/user-config:userName" component={UserConfig} />
            <Route path="/usuario-config" component={UsuarioConfig} />
          </Switch>

        </div>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onKeyDown={doWhenOnkeyDownEqualEnter}></input>
        <div className="WeatherEngine">
          {createHTML(numbersCardToPrint)}
        </div>
      </div>
    </Router>
  );
}

export default App;
