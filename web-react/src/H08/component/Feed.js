import React, {useState, useEffect} from 'react';
import user from '../../H05/Img/user.png'
import './Feed.css'

export const Feed = (props) => {
    return <>
        <div className = "feed">
            <div className = "feedUser">
                <img id = "userIcon" src = {user}/>
                <div id = "userName">{props.name}</div>
            </div>
            <div className = "feedContent">
                <div id = "content">{props.body}</div>
            </div>
        </div>
    </>;
};
