import React from 'react';
import logo from "../img/logo.png";

export const LogInBox = () => {
    return <>
        <div><img id = "HWLogo" src = {logo}/></div>
        {/*<input type="text" placeholder="이름" name="userName" value={user.userName} onChange={getValue}/>*/}

        <input id="LogIn_ID" type="text" placeholder="사용자 이름(아이디)"/>
        <input id="LogIn_PW" type="password" placeholder="비밀번호"/>

        <button id="LogInBtn">로그인</button>
        {/*<div>----------또는-----------</div>*/}
    </>
}
