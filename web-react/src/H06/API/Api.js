import React from 'react';
import axios from "axios";
import {DisplayWeather} from "../component/DisplayWeather";

export async function Search(country){
    console.log('connect');
    console.log(country);
    const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
    // const URL = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
    const URL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`);
    const result = await URL.json();
    const data = DisplayWeather(result);
    console.log("result",result);
    console.log("data",data);
    return result;
    // axios.get(URL).then(responseData => {
    //     console.log("Hi");
    //     const data = DisplayWeather(responseData.data);
    //     console.log("data",data);
    //     return data;
    // })
}
