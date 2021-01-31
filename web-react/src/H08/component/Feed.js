import React, {useState, useEffect} from 'react';
import user from '../../H05/Img/user.png'
import './Feed.css'
import {useHistory} from "react-router";
import xMark from '../img/x-mark.png';
import edit from '../img/edit.png';
import comment from '../img/comment.png';
import {deletePostAPI} from "../Api";

export const Feed = (props) => {
    const history = useHistory();
    const movePostPage = (id) => {
        history.push(`/PostPage/${id}`);
    }

    const deletePost = (id) => {
        const name = window.localStorage.getItem("username");

        if (name === props.name){
            deletePostAPI(id);
            console.log(id+"번째 글이 삭제되었습니다.")
        }
        else{
            alert("사용자의 게시글이 아닙니다!");
        }
    }

    return <>
        <div className = "feed">
            <div className = "feedUser">
                <div id="left">
                    <img id = "userIcon" src = {user}/>
                    <div>{props.id}</div>
                    <div id = "userName">{props.name}</div>
                </div>
                <div id="right">
                    <img id = "expand" src = {comment} onClick={() => {movePostPage(props.id)}}/>
                    <img id = "edit" src = {edit}/>
                    <img id = "xButton" src={xMark} onClick={() => {deletePost(props.id)}}/>
                </div>
            </div>
            <div className = "feedContent">
                <div id = "content">{props.body}</div>
            </div>
        </div>
    </>;
};
