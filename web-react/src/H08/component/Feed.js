import React, {useState, useEffect} from 'react';
import user from '../../H05/Img/user.png'
import './Feed.css'
import {useHistory} from "react-router";

export const Feed = (props) => {
    const history = useHistory();

    const movePostPage = () => {
        history.push('/PostPage/'+props.id);
    }

    return <>
        <div className = "feed" onClick={movePostPage}>
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
