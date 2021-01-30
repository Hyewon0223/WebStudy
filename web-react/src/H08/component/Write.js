import React, {useState, useEffect} from 'react';
import './Write.css';

export function Write(props){
    const [user, setUser] = useState({
        username: localStorage.key(1),
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
        props.writeFunc(user.username,user.writeContent);
        console.log("내용 : ", user.writeContent);
        setUser({
            writeContent: ''
        })
    }

    return <>
        <div className = "WriteFeed">
            <textarea id = "WriteContent" name="writeContent" placeholder = "내용" value={user.writeContent} onChange={getValue}/>
            <div id = "space"> </div>
            <div id = "postBtnDiv"><button id="postBtn" onClick={postClick}>POST</button></div>
        </div>
    </>
}
