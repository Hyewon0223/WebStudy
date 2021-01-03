import React, {useState, useEffect} from 'react';
import './Write.css';
import TLPage, {readFeeds} from "../page/TimeLinePage";
import {Link} from "react-router-dom";

// function Send(){
//     const writer = document.querySelector('#Writer').value;
//     const writeContent = document.querySelector('#WriteContent').value;
//
//     return createFeed(writer,writeContent);
// }

export function Write(props){
    const [user, setUser] = useState({
        writer: '',
        writeContent: '',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const postClick = e => {
        props.writeFunc(user.writer, user.writeContent);
        console.log("작성자 : ", user.writer, "/ 내용 : ", user.writeContent);
        setUser({
            writer: '',
            writeContent: ''
        })
    }

    return <>
        <div className = "WriteFeed">
            <input id = "Writer" name="writer" type = "text" placeholder = "작성자" value={user.writer} onChange={getValue}/>
            <div id = "space"> </div>
            <textarea id = "WriteContent" name="writeContent" placeholder = "내용" value={user.writeContent} onChange={getValue}/>
            <div id = "space"> </div>
            <div id = "postBtnDiv"><button id="postBtn" onClick={postClick}>POST</button></div>
        </div>
    </>
}
