import React, {useState} from 'react';
import './DisplayWeather.css';

export const DisplayWeather = (props) => {
    const weatherResult = props;
    console.log(props);

    console.log('main',weatherResult.main.temp);
    console.log('desc',weatherResult.weather[0].description);
    console.log('icon',weatherResult.weather[0].icon);

    const temp = weatherResult.main.temp;
    const desc= weatherResult.weather[0].description;
    const icon= weatherResult.weather[0].icon;

    return [temp,desc,icon];
}
