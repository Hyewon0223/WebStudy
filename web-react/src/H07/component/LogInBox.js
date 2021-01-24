import React, {useState} from 'react';
import logo from "../img/logo.png";
import  { useHistory} from 'react-router';
import {Link, Route} from "react-router-dom";
import MainPage from "../../H05/page/MainPage";
import {createToken, getUserInfo} from './API';
import './LogInBox.css'

export const LogInBox = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const LogInClick = async() => {
        const token = await createToken(username, password);

        if(token.non_field_errors){
            alert(token.non_field_errors.join(', '));
        }
        else{
            console.log(token);
            window.localStorage.setItem(username, JSON.stringify(token));

            await getUserInfo();
            history.push('/MainPage');
        }
    }

    return <>
        <div className="center"><img id = "HWLogo" src = {logo}/></div>

        <div className="center"><input className="LoginInput" type="text" placeholder="사용자 이름(아이디)" onChange={(e) => setUsername(e.target.value)}/></div>
        <div className="center"><input className="LoginInput" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/></div>

        <div className="center"><button id="LoginBtn" onClick={LogInClick}>로그인</button></div>
    </>
}
