import React, {useState, useEffect} from 'react';
import Select from './component/Select'
import {Search} from "./API/Api";
import {DisplayWeather} from "./component/DisplayWeather";

export function H06_weather(props){
    const [weather, setWeather] = useState([]);
    useEffect(() => {
        const server = () => {
            setWeather(Search('Seoul'));
        }
        server();
    }, []);

    return <>
        <Select
            SearchWeather = {Search}
        />
        <DisplayWeather/>
    </>
}

export default H06_weather;
