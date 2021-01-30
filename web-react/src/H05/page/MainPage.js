import React, {useState, useEffect} from 'react';
import {TitleBar} from '../component/TitleBar';
import {MyInfo} from '../component/MyInfo';
import {Board} from '../component/Board';
import './MainPage.css';
import {readFeeds} from "./TimeLinePage";


function MyPage(){

    return<>
        <div className = "Wrap">
            <TitleBar/>
            <MyInfo/>
            <Board/>
        </div>
    </>
}

export default MyPage;
