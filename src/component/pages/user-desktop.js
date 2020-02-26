import React, { useContext } from 'react';

import Hp from "../../component/helpers";
import WeatherEngine from "../WeatherEngine";
import { UserContext } from '../UserContext';

const UserDesktop = (props) => {
    console.log("UserDesktop");
    const { setUserName } = useContext(UserContext);

    const userName = Hp.getUserName(props.match);
    setUserName(userName);
    //setUserNameNB(userName);
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