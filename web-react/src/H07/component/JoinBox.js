import React from 'react';
import logo from '../img/logo.png'

export const JoinBox = () => {
    return <>
        <div><img id = "HWLogo" src = {logo}/></div>
        <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>

        <input id="Join_ID" type="text" placeholder="사용자 이름(아이디)"/>
        <input id="Join_email" type="text" placeholder="이메일"/>
        <input id="Join_PW" type="password" placeholder="비밀번호"/>
        <input id="Join_lastName" type="text" placeholder="성"/>
        <input id="Join_firstName" type="text" placeholder="이름"/>
        <button id="JoinBtn">가입</button>
    </>
}
