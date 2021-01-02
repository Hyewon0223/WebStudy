import React from 'react';
import './EditProfile.css';

import profile from '../Img/profile.jpg'

function displayID(){
    const setID = document.querySelector('#setID');
    const getID = document.querySelector('#getID').value;

    console.log(getID);
    setID.innerHTML = getID;
}

export function EditProfile(){
    return<>
        <div className="Edit">
            <table id = "Edit">
                <tbody>
                    <tr>
                        <td className="label"><img id = "profile" src={profile}/></td>
                        <td><div id = "setID"></div> </td>
                    </tr>
                    <tr>
                        <td className="label">이름</td>
                        <td><input type="text" placeholder="이름" defaultValue="최혜원"/></td>
                    </tr>
                    <tr>
                        <td className="label">사용자 이름</td>
                        <td><input id = "getID" type="text" placeholder="사용자 이름" defaultValue="_hhyeoni" onChange={displayID}/></td>
                    </tr>
                    <tr>
                        <td className="label">웹사이트</td>
                        <td><input type="text" placeholder="웹사이트"/></td>
                    </tr>
                    <tr>
                        <td className="label">소개</td>
                        <td><textarea placeholder="소개"/></td>
                    </tr>
                    <tr>
                        <td className="label">이메일</td>
                        <td><input type="text" placeholder="이메일"/></td>
                    </tr>
                    <tr>
                        <td className="label">전화번호</td>
                        <td><input type="text" placeholder="전화번호"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id = "submitDiv">
            <button id = "submit">제출</button>
        </div>
    </>
}

export default EditProfile;
