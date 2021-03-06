import React, {useState, useEffect} from 'react';
import user from "../../../H05/Img/user.png";
import './Comment.css'
import comment from "../../img/comment.png";
import edit from "../../img/edit.png";
import xMark from "../../img/x-mark.png";
import {cmtDelAPI, cmtEditAPI} from "../../Api";
import CommentWrite from "./CommentWrite";

export const Comment = (props) => {
    const [state, setState] = useState({
        changeState : false,
        contentState : 'POST',
        EditComment : '',
    });

    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const cmtDelClick = (PostID, CmtID,content) => {
        const name = window.localStorage.getItem("username");
        if (name === props.name){
            cmtDelAPI(PostID,CmtID,content);
            console.log(CmtID+"번째 댓글이 삭제되었습니다.")
        }
        else{
            alert("사용자의 댓글이 아닙니다!");
        }
    }

    const EditIconClick = () => {
        const name = window.localStorage.getItem("username");
        if (name === props.name){
            setState({
                contentState : 'EDIT',
                EditComment : props.body,
            })
        }
        else{
            alert("사용자의 댓글이 아닙니다!");
        }
    }

    const cmtEditClick = (PostID, CmtID) => {
        cmtEditAPI(PostID,CmtID,state.EditComment);
        console.log(CmtID+"번째 댓글이 수정되었습니다.");
        setState({
            contentState : 'POST',
        })
    }

    const EditDisplay = () => {
        if (state.contentState === "POST") {
            return <div className="feedContent"><div id="content">{props.body}</div></div>
        }
        return <>
            <input id="contentInput" name="EditComment" placeholder="댓글 수정 내용" value={state.EditComment}
                   onChange={getValue}/>
            <button id="CmtEditBtn" onClick={() => {cmtEditClick(props.PostID, props.id)}}>Edit</button>
        </>
    }

    return <>
        <div className="comment">
            <div className = "feedUser">
                <div id = "left">
                    <img id = "userIcon" src = {user}/>
                    <div id = "userName">{props.name}</div>
                </div>
                <div id="right">
                    <img id = "edit" src = {edit} onClick={() => {EditIconClick(props.PostID,props.id)}}/>
                    <img id = "xButton" src={xMark} onClick={() => {cmtDelClick(props.PostID,props.id)}}/>
                </div>
            </div>
            <EditDisplay/>
        </div>
    </>
}

export default Comment;
