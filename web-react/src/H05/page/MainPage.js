import React from "react";
import {TitleBar} from '../component/TitleBar';
import {MyInfo} from '../component/MyInfo';
import {Board} from '../component/Board';
import './MainPage.css';

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
