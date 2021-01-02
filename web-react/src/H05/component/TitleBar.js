import React, {useState, useEffect} from 'react';
import './TitleBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
                <Link to="/"><img className="Icon" src={home}/></Link>
                <Link to="/TimeLine"><img className="Icon" src={send}/></Link>
                <img className="Icon" src={compass}/>
                <img className="Icon" src={heart}/>
                <Link to="/MyPage"><img className="profileIcon" src={profile}/></Link>
            </div>
        </div>
    </>
}
