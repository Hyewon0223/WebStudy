import React, {useState} from 'react';
import './EditProfile.css';

import {Info, Display} from './MyInfo'
// import
import profile from '../Img/profile.jpg'

export function EditProfile(){
    const [state, setState] = useState("_hhyeoni");

    const displayID = e => {
        setState(e.target.value);
    };

    const [user, setUser] = useState({
        userName : '최혜원',
        userID: '_hhyeoni',
        userWeb: '',
        userInfo: '',
        userEmail: '',
        userPhone: '',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const submitClick = e => {
        // props.submitMyInfo(user.userName, user.userID, user.userWeb, user.userInfo, user.userEmail, user.userPhone);
        console.log("submit",user.userID);
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
                        <td><input type="text" placeholder="이름" name="userName" value={user.userName} onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td className="label">사용자 이름</td>
                        <td><input id = "getID" type="text" placeholder="사용자 이름" name="userID" value={user.userID} onChange={getValue}/></td>
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
                        <td><input type="text" placeholder="이메일" name="userEmail" value={user.userEmail} onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td className="label">전화번호</td>
                        <td><input type="text" placeholder="전화번호" name="userPhone" value={user.userPhone} onChange={getValue}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id = "submitDiv">
            <button id = "submit" onClick={submitClick}>제출</button>
        </div>
    </>
}

export default EditProfile;
