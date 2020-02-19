import React from 'react';
import Bbk_img from '../../assets/bbkweather.png';

const Home = () => {
    console.log("Home");
    return (<div className="container">
        <img src={Bbk_img} alt="" width="80%" />
    </div>);
}

export default Home;