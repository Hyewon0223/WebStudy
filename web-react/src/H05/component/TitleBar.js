import React, {useState, useEffect} from 'react';
import './TitleBar.css';

import logo from '../Img/logo.png';
import home from '../Img/home.png';
import heart from '../Img/heart.png';
import send from '../Img/send.png';
import compass from '../Img/compass.png';
import profile from '../Img/profile.jpg';

export function TitleBar(){
    return<>
        <div id = "titleBar">
            <img id = "titleLogo" src={logo}/>
            <input id = "search" type = "text" placeholder = "검색"/>
            <div id = "menuIcon">
                <img className="Icon" src={home}/>
                <img className="Icon" src={send}/>
                <img className="Icon" src={compass}/>
                <img className="Icon" src={heart}/>
                <img className="profileIcon" src={profile}/>
            </div>
        </div>
    </>
}
