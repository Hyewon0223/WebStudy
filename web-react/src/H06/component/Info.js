import React from 'react';
import {DisplayWeather} from "./DisplayWeather";

export const Info = (props) => {
    return props.weatherInfo.map(
        data =>
            <DisplayWeather
                temp={data.temp}
                desc={data.desc}
            />)
}

