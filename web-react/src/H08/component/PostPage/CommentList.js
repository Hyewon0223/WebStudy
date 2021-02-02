import React, {useEffect} from "react";
import {Comment} from './Comment';

export const CommentList = (props) => {
    return props.comments.map(comment => <Comment PostID = {props.PostID} id={comment.id} name={comment.owner} body={comment.content}/>)
}
