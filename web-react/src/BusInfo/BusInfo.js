import React from 'react';
import axios from "axios";

export async function getInfo(){
    const apiKey = process.env.REACT_APP_BUSINFO_KEY;
    const URL = `http://ws.bus.go.kr/api/rest/arrive/getLowArrInfoByStId?ServiceKey=${apiKey}&stId=08110`

    const feedResult = await fetch(URL,{
        method: 'get',
    });
    const result = await feedResult.json();
    return result;
}

export const BusInfo = () => {

    const apiKey = process.env.REACT_APP_BUSINFO_KEY;
    // const URL = `http://localhost:3000/ws.bus.go.kr/api/rest/arrive/getLowArrInfoByStId?ServiceKey=${apiKey}&stId=112000001`;
    const URL = `http://ws.bus.go.kr/api/rest/arrive/getLowArrInfoByStId?ServiceKey=${apiKey}&stId=112000001`;

    axios.get(URL).then(busResult => {
        busResult = busResult.data
        console.log(busResult);
    })
    return <>
        <div>
            <div>Hi~!</div>
        </div>
    </>
}
