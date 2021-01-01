import React from "react";
import './Write.css';
import user from '../Img/user.png'

function Message(){
    let Writer = document.querySelector('#Writer');
    let WriteContent = document.querySelector('#WriteContent');

    return [Writer, WriteContent];
}

export function Write(props){
    return <>
        <div className = "WriteFeed">
                <input id = "Writer" type = "text" placeholder = "작성자"/>
            <p> </p>
            <textarea id = "WriteContent" placeholder = "내용"/>
            <button>POST</button>
        </div>
    </>
}
