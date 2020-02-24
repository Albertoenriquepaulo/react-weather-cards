import React from 'react';

import Hp from "../../component/helpers";
import WeatherEngine from "../WeatherEngine";
import UserConfig from "../pages/user-config";

const UserDesktop = (props) => {
    console.log("UserDesktop");
    const userName = Hp.getUserName(props.match);
    let userObject = Hp.fillUserFromLSData(userName);

    const ceateCards = () => {
        let weatherInnerHTML = [];

        userObject.countries.map((item) => {
            console.log(item);
            weatherInnerHTML.push(<WeatherEngine initialLocation={item} />)
        }
        )
        return weatherInnerHTML;
    }

    return (
        <div className="WeatherEngine">
            {ceateCards()}
        </div>
    );
}

export default UserDesktop;