import React, {useState} from 'react';
import logo from "../img/logo.png";
import  { useHistory} from 'react-router';
import {Link, Route} from "react-router-dom";
import MainPage from "../../H05/page/MainPage";
import './LogInBox.css'

export const LogInBox = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const history = useHistory();

    const createToken = async (id,pw) => {
        const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/api-token-auth/', {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                username: id,
                password: pw,
            }),
        });
        return await result.json();
    }

    const LogInClick = async() => {
        const token = await createToken(username, password);

        if(token.non_field_errors){
            alert(token.non_field_errors.join(', '));
        }
        else{
            console.log(token);
            window.localStorage.setItem(username, JSON.stringify(token));
            // const getUserInfo = window.localStorage.getItem(username);
            // console.log(JSON.parse(getUserInfo));

            history.push('/MainPage')
        }
    }

    return <>
        <div className="center"><img id = "HWLogo" src = {logo}/></div>
        {/*<input type="text" placeholder="이름" name="userName" value={user.userName} onChange={getValue}/>*/}

        <div className="center"><input className="LoginInput" type="text" placeholder="사용자 이름(아이디)" onChange={(e) => setUsername(e.target.value)}/></div>
        <div className="center"><input className="LoginInput" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/></div>

        <div className="center"><button id="LoginBtn" onClick={LogInClick}>로그인</button></div>
        {/*<div>----------또는-----------</div>*/}
    </>
}
