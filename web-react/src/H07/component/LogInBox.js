import React, {useState} from 'react';
import logo from "../img/logo.png";

export const LogInBox = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
        }
    }

    return <>
        <div><img id = "HWLogo" src = {logo}/></div>
        {/*<input type="text" placeholder="이름" name="userName" value={user.userName} onChange={getValue}/>*/}

        <input id="LogIn_ID" type="text" placeholder="사용자 이름(아이디)" onChange={(e) => setUsername(e.target.value)}/>
        <input id="LogIn_PW" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>

        <button id="LogInBtn" onClick={LogInClick}>로그인</button>
        {/*<div>----------또는-----------</div>*/}
    </>
}
