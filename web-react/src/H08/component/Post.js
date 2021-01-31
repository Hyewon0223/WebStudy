import React, {useState, useEffect} from 'react';
import './Post.css';
import {readFeeds} from "../Api";
import user from "../../H05/Img/user.png";

export const Post = (PostID) => {
    const [post, setPost] = useState({
        user : '',
        content : '',
    })

    const DisplayPost = async() => {
        const token = window.localStorage.getItem('Token');

        const feedResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/'+PostID["id"],{
            method: 'get',
            headers: {
                'Authorization':token,
            },
        });
        const result = await feedResult.json();

        setPost({
            user : result.owner,
            content : result.content,
        })
        return result;
    }

    useEffect(() => {
        DisplayPost().then(r => console.log(r));
    }, []);

    return <>
        <div className="post">
            <div className = "postUser">
                <img id = "userIcon" src = {user}/>
                <div id = "postName">{post.user}</div>
            </div>
            <div className = "postContent">
                <div id = "content">{post.content}</div>
            </div>
        </div>
    </>;
}

export default Post;
