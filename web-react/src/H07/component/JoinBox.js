import React, {useState} from 'react';
import logo from '../img/logo.png'

export const JoinBox = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');

    const JoinAPI = async (id,em,pw,ln,fn) => {
        const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/', {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                username: id,
                email: em,
                password: pw,
                last_name: ln,
                first_name: fn,
            }),
        });
        return await result.json();
    }

    const JoinClick = async() => {
        const join = await JoinAPI(username, email, password, lastName, firstName);
        console.log(join);
        // if(token.non_field_errors){
        //     alert(token.non_field_errors.join(', '));
        // }
        // else{
        //     console.log(token);
        // }
    }

    return <>
        <div><img id = "HWLogo" src = {logo}/></div>
        <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>

        <input id="Join_ID" type="text" placeholder="사용자 이름(아이디)" onChange={(e) => setUsername(e.target.value)}/>
        <input id="Join_email" type="text" placeholder="이메일" onChange={(e) => setEmail(e.target.value)}/>
        <input id="Join_PW" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>
        <input id="Join_lastName" type="text" placeholder="성" onChange={(e) => setLastName(e.target.value)}/>
        <input id="Join_firstName" type="text" placeholder="이름" onChange={(e) => setFirstName(e.target.value)}/>
        <button id="JoinBtn" onClick={JoinClick}>가입</button>
    </>
}
