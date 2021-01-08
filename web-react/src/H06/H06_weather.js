import React, {useState, useEffect} from 'react';
import Select from './component/Select';
import {Search} from "./API/Api";
import {DisplayWeather} from "./component/DisplayWeather";


export function H06_weather(props){
    const [weather, setWeather] = useState({
        temp:0,
        desc:'',
        icon:'',
    });
    useEffect(() => {
        const data = Search('Seoul');

        console.log("mainData",data);
        setWeather({
            temp:data[0],
            desc:data[1],
            icon:data[2],
        });
    }, []);


    return <>
        <Select
            SearchWeather = {Search}
        />
        <div>desc : {weather.desc}</div>
    </>
}

export default H06_weather;
