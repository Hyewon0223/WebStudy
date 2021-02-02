import React, {useState, useEffect} from 'react';
import './CommentWrite.css';

export const CommentWrite = (props) => {
    const [state, setState] = useState({
        comment : '',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const commentPostClick = e => {
        props.writeCmtFunc(props["PostID"], state.comment);
        console.log("내용 : ",state.comment);
        setState({
            comment: ''
        })
    }

    return <>
        <div className = "WriteComment">
            <textarea id = "WriteComment" name="comment" placeholder = "댓글 내용" value={state.comment} onChange={getValue}/>
            <button id="CmtPostBtn" onClick={commentPostClick}>POST</button>
        </div>
    </>
}

export default CommentWrite;
