import React, {useState, useEffect} from 'react';
import user from '../../../H05/Img/user.png'
import './Feed.css'
import {useHistory} from "react-router";
import xMark from '../../img/x-mark.png';
import edit from '../../img/edit.png';
import comment from '../../img/comment.png';
import {deletePostAPI, postEditAPI} from "../../Api";

export const Feed = (props) => {
    const [state, setState] = useState({
        state : 'POST',
        EditPost : '',
    });

    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

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

    const EditIconClick = () => {
        const name = window.localStorage.getItem("username");
        if (name === props.name){
            setState({
                state : 'EDIT',
                EditPost : props.body,
            })
        }
        else{
            alert("사용자의 글이 아닙니다!");
        }
    }

    const postEditClick = (PostID) => {
        postEditAPI(PostID,state.EditPost);
        console.log(PostID+"번째 글이 수정되었습니다.");
        setState({
            state : 'POST',
        })
    }

    const EditDisplay = () => {
        if (state.state === "EDIT") {
            return <>
                <input id="contentPostInput" name="EditPost" placeholder="글 수정 내용"  value={state.EditPost} onChange={getValue}/>
                <button id="postEditBtn" onClick={() => {postEditClick(props.id)}}>Edit</button>
            </>
        }

        else if (state.state === "POST"){
            return <div className = "feedContent"><div id = "content">{props.body}</div></div>
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
                    <img id = "edit" src = {edit} onClick={() => {EditIconClick()}}/>
                    <img id = "xButton" src={xMark} onClick={() => {deletePost(props.id)}}/>
                </div>
            </div>
            <EditDisplay/>
        </div>
    </>;
};
