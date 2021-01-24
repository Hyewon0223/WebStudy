import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import './MyInfo.css';
import profile from '../Img/profile.jpg';
import settings from '../Img/settings.png';

export const Display = (props) => {
    return <div>{props.ID}</div>
}

export function MyInfo(){
    const [user, setUser] = useState({
        username: '',
        email: '',
        last_name: '',
        first_name: '',
    });

    const DisplayUserInfo = async() => {
        const idx = window.localStorage.getItem('id');
        const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/'+idx,{
            method: 'get',
        });
        const data = await result.json();
        console.log(data);

        setUser({
            username: data["username"],
            email: data["email"],
            last_name: data["last_name"],
            first_name: data["first_name"],
        })
    }

    useEffect(() => {
        DisplayUserInfo();
    }, []);

    return<>
        <table id = "MyInfoProfile">
            <tbody>
                <tr>
                    <td>
                        <img id = "MyProfile" src = {profile}/>
                    </td>
                    <td>
                        <div className = "MyProfileTxt">
                            <div id = "txt1">
                                <Display ID={user.username}/>
                                <Link to="/MyPage"><button>프로필 편집</button></Link>
                                <img id = "settingIcon" src = {settings}/>
                            </div>
                            <div id = "txt2">
                                <div>게시물 14</div>
                                <div>팔로워 223</div>
                                <div>팔로우 223</div>
                            </div>
                            <div id = "txt3">
                                <div>{user.last_name}{user.first_name}</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
}

export default MyInfo;
