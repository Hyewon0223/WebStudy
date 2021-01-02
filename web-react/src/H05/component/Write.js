import React from "react";
import './Write.css';
import {createFeed} from '../page/TimeLinePage';

function Send(){
    const writer = document.querySelector('#Writer').value;
    const writeContent = document.querySelector('#WriteContent').value;

    return createFeed(writer,writeContent);
}

export function Write(props){
    return <>
        <div className = "WriteFeed">
                <input id = "Writer" type = "text" placeholder = "작성자"/>
            <p> </p>
            <textarea id = "WriteContent" placeholder = "내용"/>
            <button id="postBtn" onClick={Send}>POST</button>
        </div>
    </>
}
