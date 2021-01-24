import React, {useState, useEffect} from 'react';
import  { useHistory} from 'react-router';
import './EditProfile.css';
import profile from '../Img/profile.jpg'

export function EditProfile(){
    const [user, setUser] = useState({
        userLastName : '',
        userFirstName : '',
        userID: '',
        userPassword: '',
        userWeb: '',
        userInfo: '',
        userEmail: '',
        userPhone: '',
    })

    const [state, setState] = useState('');

    const SetUserInfo = async() => {
        const idx = window.localStorage.getItem('id');
        const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/'+idx,{
            method: 'get',
        });
        const data = await result.json();
        console.log(data);

        setUser({
            userLastName : data["last_name"],
            userFirstName : data["first_name"],
            userID: data["username"],
            userPassword: '',
            userWeb: '',
            userInfo: '',
            userEmail: data["email"],
            userPhone: '',
        })

        setState(data["username"]);
    }

    useEffect(() => {
        SetUserInfo();
    }, []);


    const displayID = e => {
        setState(e.target.value);
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })

    };

    const getValue = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const SubmitClick = async() => {
        console.log(user.userID, user.userEmail, user.userPassword, user.userLastName, user.userFirstName);
        const idx = window.localStorage.getItem('id');
        const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/'+idx, {
            method: 'put',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                username: user.userID,
                email: user.userEmail,
                password: user.userPassword,
                last_name: user.userLastName,
                first_name: user.userFirstName,
            }),
        })

        console.log("submit",await result);
        // alert("수정되었습니다");
    }

    const history = useHistory();

    const DeleteClick = async() => {
        alert("탈퇴하시겠습니까?");
        const idx = window.localStorage.getItem('id');
        await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/'+idx,{
            method: 'delete',
        });
        console.log('delete',user.userID);
        history.push('/')
    }

    return<>
        <div className="Edit">
            <table id = "Edit">
                <tbody>
                    <tr>
                        <td className="label"><img id = "profile" src={profile}/></td>
                        <td><div id = "setID" onChange={getValue}>{state}</div> </td>
                    </tr>
                    <tr>
                        <td className="label">이름</td>
                        <td><input id = "nameInput" type="text" placeholder="성" name="userLastName" value={user.userLastName} onChange={getValue}/>
                        <input id="nameInput" type="text" placeholder="이름" name="userFirstName" value={user.userFirstName} onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td className="label">사용자 이름</td>
                        <td><input id = "getID" type="text" placeholder="사용자 이름" name="userID" value={user.userID} onChange={displayID}/></td>
                    </tr>
                    <tr>
                        <td className="label">비밀번호</td>
                        <td><input type="password" placeholder="비밀번호" name="userPassword" value={user.userPassword} onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td className="label">웹사이트</td>
                        <td><input type="text" placeholder="웹사이트" name="userWeb" value={user.userWeb} onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td className="label">소개</td>
                        <td><textarea placeholder="소개" name="userInfo" value={user.userInfo} onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td className="label">이메일</td>
                        <td><input type="email" placeholder="이메일" name="userEmail" value={user.userEmail} onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td className="label">전화번호</td>
                        <td><input type="text" placeholder="전화번호" name="userPhone" value={user.userPhone} onChange={getValue}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id = "submitDiv">
            <button id = "submit" onClick={SubmitClick}>제출</button>
            <button id = "submit" onClick={DeleteClick}>탈퇴</button>
        </div>
    </>
}

export default EditProfile;


