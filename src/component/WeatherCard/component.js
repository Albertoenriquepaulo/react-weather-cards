import React from 'react';
import styled from '@emotion/styled';

import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";


const WeatherCard = ({ temp, condition, city, country, changeQuery }) => {
    let highColor = 0, lowColor = 0;
    let bg = null;
    const minTemp = 12;  //12
    const maxTemp = 32; //32
    if (temp > minTemp) { // Hot Weather
        highColor = (1 - ((temp - minTemp) / 28)) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(to top,
            rgb(255, ${highColor}, 0), 
            rgb(255, ${lowColor}, 0))`;
    } else if (temp <= minTemp) {// Cold Weather
        highColor = (1 - ((temp + 20) / maxTemp)) * 255;
        lowColor = highColor - 150;
        bg = `linear-gradient(to top,
            rgb(0, ${highColor}, 255), 
            rgb(0, ${lowColor}, 255))`;
    }


    const Card = styled.div`
        margin: 20px auto;
        background: ${bg};
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `

    return (
        <Card>
            <Location city={city} country={country} changeQuery={changeQuery} />
            <Icon condition={condition} />
            <Condition temp={temp} condition={condition} />
        </Card>
    );
}

export default WeatherCard;
