import React, {useState} from "react";
import './MyInfo.css';

import profile from '../Img/profile.jpg';
import settings from '../Img/settings.png';
import {Link} from "react-router-dom";

export const Display = (props) => {
    return <div>{props.ID}</div>
}

export function MyInfo(){
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
                                <Display ID="_hhyeoni"/>
                                <Link to="/MyPage"><button>프로필 편집</button></Link>
                                <img id = "settingIcon" src = {settings}/>
                            </div>
                            <div id = "txt2">
                                <div>게시물 14</div>
                                <div>팔로워 223</div>
                                <div>팔로우 223</div>
                            </div>
                            <div id = "txt3">
                                <div>최혜원</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
}

export default MyInfo;
