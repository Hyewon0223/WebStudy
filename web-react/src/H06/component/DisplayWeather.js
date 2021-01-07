import React, {useState} from 'react';
import './DisplayWeather.css';
import {Display} from "../H06_weather";
// function Temp(props){
//     return <div>{props}</div>
// }

export const DisplayWeather = (props) => {
    const weatherResult = props;
    // const [weather, setWeather] = useState({
    //     temp : weatherResult.main.temp,
    //     desc : '',
    //     icon : '',
    // })
    // const getResult = e => setWeather({
    //     temp : weatherResult.main.temp,
    //     desc : weatherResult.weather[0].description,
    //     icon : weatherResult.weather[0].icon,
    // })
    console.log(props);

    console.log('main',weatherResult.main.temp);
    console.log('desc',weatherResult.weather[0].description);
    console.log('icon',weatherResult.weather[0].icon);

    const temp = weatherResult.main.temp;
    const desc= weatherResult.weather[0].description;
    const icon= weatherResult.weather[0].icon;

    return [temp,desc,icon];
}
