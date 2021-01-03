import React, {useState, useEffect} from 'react';
import {TitleBar} from '../component/TitleBar';
import {Display, MyInfo} from '../component/MyInfo';
import {Board} from '../component/Board';
import './MainPage.css';
import {readFeeds} from "./TimeLinePage";


function MyPage(){
    const [ID, setID] = useState('_hhyeoni');

    useEffect(() => {
        console.log(ID);
    });

    return<>
        <div className = "Wrap">
            <TitleBar/>
            <MyInfo/>
            <Board/>
        </div>
    </>
}

export default MyPage;
