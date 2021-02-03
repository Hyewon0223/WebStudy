import React, {useState, useEffect} from 'react';
import Post from "../component/PostPage/Post";
import {TitleBar} from "../../H05/component/TitleBar";
import {CommentList} from "../component/PostPage/CommentList";
import {createComment, readComments, readFeeds} from "../Api";
import {useHistory} from "react-router";
import './PostPage.css';
import CommentWrite from "../component/PostPage/CommentWrite";

export const PostPage = (props) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const server = async() => {
            setComments(await readComments(props.match.params.id));
        }
        server();
    }, []);

    return <>
        <div id = "basic">
            <TitleBar/>
            <table className="PostPage">
                <tbody>
                <tr>
                    <td id = "post"><Post id={props.match.params.id}/></td>
                    <td id = "comment">
                        <div id="list">
                            <CommentList PostID={props.match.params.id}
                                readComments = {readComments}
                                setComments = {setComments}
                                comments = {comments}
                            />
                        </div>
                        <div id="cmtWrite">
                            <div id = "space2"/>
                            <CommentWrite PostID={props.match.params.id}
                                writeCmtFunc = {createComment}
                            />
                            <div id = "space2"/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </>;
}

export default PostPage;
