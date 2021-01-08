import React, {useState, useEffect} from 'react';
import axios from "axios";

export function Main(props){
    const [select, setSelect] = useState({
        value : 'Seoul',
    })
    const getValue = e => {
        setSelect({
            value : e.target.value
        })
    }
    const searchClick = e => {
        console.log("search", select.value);
        console.log('connect');
        const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=${apiKey}`;

        axios.get(URL).then(result => {
            result = result.data
            console.log(result);
            setWeather({
                temp:result.main.temp,
                desc:result.weather[0].description,
                icon:result.weather[0].icon,
            })
        })
    }

    useEffect(() => {
        searchClick();
    }, []);

    const [weather, setWeather] = useState({
        temp:0,
        desc:'',
        icon:'',
    });


    return <>
        <select value={select.value} onChange={getValue}>
            <option value="Seoul">서울</option>
            <option value="New York">뉴욕</option>
            <option value="Sydney">시드니</option>
            <option value="Paris">파리</option>
        </select>
        <button onClick = {searchClick}>확인</button>

        <div>temp : {weather.temp}</div>
        <div>desc : {weather.desc}</div>
        <div>icon : {weather.icon}</div>
    </>
}

export default Main;
