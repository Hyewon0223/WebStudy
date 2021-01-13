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
    // request와 cheerio모듈
    /*
    1. request 모듈 사용시
        - http, https 상관없이 request()면 다 한 번에 읽음
        - 30x는 request() 요청시, followRedirect와 maxRedirects 인자 설정으로 간단히 해결할 수 있음
        - http 소스는 res.body에 이미 다 파싱되어 있음
    2. cherrio 모듈
        - node.js로 받아온 웹페이지를 조작할 수 있게 도와주는 라이브러리
        - jquery를 사용해 DOM에 접근하는 것이므로 jquery를 알아야 함
        -
     */
    let request = require('request');
    //let cherrio = require('cherrio');

    const apiKey = process.env.REACT_APP_BUSINFO_KEY;
    const URL = `http://ws.bus.go.kr/api/rest/arrive/getLowArrInfoByStId?ServiceKey=${apiKey}&stId=112000001`;

    request(URL, function(err, res, body){
        console.log(body);
    })
    /*
    axios.get(URL).then(busResult => {
        busResult = busResult.data
        console.log(busResult);
    })

     */
    return <>
        <div>
            <div>Hi~!</div>
        </div>
    </>
}
