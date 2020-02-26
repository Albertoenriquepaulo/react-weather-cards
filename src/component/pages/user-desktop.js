import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Hp from "../../component/helpers";
import WeatherEngine from "../WeatherEngine";
import { UserContext } from '../UserContext';

const UserDesktop = (props) => {
    let history = useHistory();
    const { setUserName } = useContext(UserContext);

    const userName = Hp.getUserName(props.match);
    setUserName(userName);
    //setUserNameNB(userName);
    let userObject = Hp.fillUserFromLSData(userName);

    const ceateCards = () => {
        let weatherInnerHTML = [];

        userObject.countries.map((item) => {
            weatherInnerHTML.push(<WeatherEngine initialLocation={item} key={item} />)
        }
        )
        return weatherInnerHTML;
    }

    const redirect = (e) => {
        e.preventDefault();
        history.push(`/user-config:${userName}`);
    }

    return (
        <>
            <div className="WeatherEngine">
                {ceateCards()}
            </div>
            <div className="text-swap-config-cards">
                <a className="text-swap-config-cards btn btn-primary" onClick={(e) => {
                    redirect(e);
                }
                }>Gestionar mis paises</a>
            </div>
        </>
    );
}

export default UserDesktop;