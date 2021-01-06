import React, {useState} from 'react';
import './DisplayWeather.css';

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
    console.log('props',weatherResult);

    return <>
        <div>
            {/*<p>temp : {weatherResult.main}</p>*/}
            {/*<p>desc : {weatherResult.description}</p>*/}
        </div>
    </>
}
