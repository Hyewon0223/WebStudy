import React from "react";
import './MyInfo.css';

import profile from '../Img/profile.jpg';
import settings from '../Img/settings.png';

export function MyInfo(){
    return<>
        <table id = "MyInfoProfile">
            <tr>
                <td>
                    <img id = "MyProfile" src = {profile}/>
                </td>
                <td>
                    <div className = "MyProfileTxt">
                        <div id = "txt1">
                            <div id = "name">_hhyeoni</div>
                            <button>프로필 편집</button>
                            <img id = "settingIcon" src = {settings}/>
                        </div>
                        <div id = "txt2">
                            <div>게시물 8</div>
                            <div>팔로워 157</div>
                            <div>팔로우 163</div>
                        </div>
                        <div id = "txt3">
                            <div>최혜원</div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </>
}

export default MyInfo;
