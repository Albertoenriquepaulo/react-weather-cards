//https://home.openweathermap.org
//https://home.openweathermap.org/users/sign_up
//User: React-ap-2020

import React from 'react';

import './App.css';
import WeatherEngine from "./component/WeatherEngine";
import NavBar from "./component/NavBar/navbar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="WeatherEngine">
        <WeatherEngine initialLocation="Venezuela" />
        <WeatherEngine initialLocation="Spain" />
        <WeatherEngine initialLocation="Ireland" />
      </div>
    </div>
  );
}

export default App;
