import React, {useState, useEffect} from 'react';
import Select from './component/Select'
import {Info} from './component/Info'
import {Search} from "./API/Api";
import {DisplayWeather} from "./component/DisplayWeather";


export function H06_weather(props){
    const [weather, setWeather] = useState({
        temp:0,
        desc:'',
        icon:'',
    });
    useEffect(() => {
        const data = Search('Seoul')
        const server = () => {
            setWeather({});
        }
        server();
    }, []);

    return <>
        <Select
            SearchWeather = {Search}
        />
        <div></div>
    </>
}

export default H06_weather;
