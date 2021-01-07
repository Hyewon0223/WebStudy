import React from 'react';
import axios from "axios";
import {DisplayWeather} from "../component/DisplayWeather";
import {Info} from "../component/Info";

export async function Search(country){
    console.log('connect');
    console.log(country);
    const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
    // const URL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`);
    // const result = await URL.json();
    // console.log(result);
    // return result;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
    axios.get(URL).then(responseData => {
        console.log("Hi");
        const data = DisplayWeather(responseData.data);
        Info(data);
    })
}
