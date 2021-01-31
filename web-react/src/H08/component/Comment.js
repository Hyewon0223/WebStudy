import React, {useState, useEffect} from 'react';
import user from "../../H05/Img/user.png";
import './Comment.css'

export const Comment = (props) => {
    // console.log("확인",props.body);
    return <>
        <div className="comment">
            <div className = "feedUser">
                <img id = "userIcon" src = {user}/>
                <div id = "userName">작성자 : {props.name}</div>
            </div>
            <div className = "feedContent">
                <div id = "content">내용 : {props.body}</div>
            </div>
        </div>
    </>
}

export default Comment;
