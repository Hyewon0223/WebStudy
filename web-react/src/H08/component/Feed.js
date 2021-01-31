import React, {useState, useEffect} from 'react';
import user from '../../H05/Img/user.png'
import './Feed.css'
import {useHistory} from "react-router";
import PostPage from "../page/PostPage";

export const Feed = (props) => {
    const history = useHistory();

    const movePostPage = (id) => {
        console.log(id);
        // props.readCommentFunc(id);
        // const URL = 'https://react-js-sample-api.kmuwink.net/feed/'+id;
        // PostPage(URL);
        history.push(`/PostPage/${id}`);
    }

    return <>
        <div className = "feed" onClick={() => {movePostPage(props.id)}}>
            <div className = "feedUser">
                <img id = "userIcon" src = {user}/>
                <div>{props.id}</div>
                <div id = "userName">{props.name}</div>
            </div>
            <div className = "feedContent">
                <div id = "content">{props.body}</div>
            </div>
        </div>
    </>;
};
