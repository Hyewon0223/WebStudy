import React, {useState,useEffect} from "react";
import './MyInfo.css';

import profile from '../Img/profile.jpg';
import settings from '../Img/settings.png';
import {Link} from "react-router-dom";

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
        // console.log(infoData);
        setUser({
            username: infoData["username"],
            email: infoData["email"],
            last_name: infoData["last_name"],
            first_name: infoData["first_name"],
        })
        return infoData;
    }

    useEffect(() => {
        getUserInfo().then(r => console.log(r));
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
