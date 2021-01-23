import React, {useState, useEffect} from 'react';
import './EditProfile.css';

import profile from '../Img/profile.jpg'

export function EditProfile(){
    const getUserInfo = async () => {
        const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/',{
            method: 'get',
        });
        const data = await result.json();
        console.log(data);
        let URL = '';
        for (let i=0;i<data.length;i++){
            if (localStorage.key(0) === data[i].username){
                URL = 'http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/'+(i+1);
                console.log(URL);
                break;
            }
        }

        const info = await fetch(URL,{
            method: 'get',
        });
        const infoData = await info.json();
        console.log(infoData);
        return infoData;
    }
    useEffect(() => {
        getUserInfo().then(res => console.log(res));
    }, []);

    const [state, setState] = useState("_hhyeoni");

    const displayID = e => {
        setState(e.target.value);
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    };

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
    const getValue = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }


    const DeleteUser = async () => {
        // const URL = findUser();
        console.log(URL);
        // const info = await fetch(URL,{
        //     method: 'delete',
        // });
        // const infoData = await info.json();
        // // console.log(infoData);
        // setUser({
        //     username: infoData["username"],
        //     email: infoData["email"],
        //     last_name: infoData["last_name"],
        //     first_name: infoData["first_name"],
        // })
        // return infoData;
    }



    const submitClick = e => {
        console.log("submit",user.userID);
        console.log(user.userName,user.userID,user.userWeb,user.userInfo,user.userEmail,user.userPhone);
    }

    const deleteClick = e => {

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
                        <td><input type="password" placeholder="비밀번호" name="userPassword" value={user.userPassword} onChange={displayID}/></td>
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
            <button id = "submit" onClick={deleteClick}>탈퇴</button>
        </div>
    </>
}

export default EditProfile;
